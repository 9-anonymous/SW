<?php
// src/Controller/MessageController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Message;
use App\Entity\User;
use Psr\Log\LoggerInterface;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;

class MessageController extends AbstractController
{
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    #[Route('/messages', name: 'app_messages', methods: ['POST'])]
    public function sendMessage(ManagerRegistry $doctrine, Request $request, UserRepository $userRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Validate and get sender ID from client-side
        $loggedInUserId = 1;

        if (!$loggedInUserId) {
            return new JsonResponse(['error' => 'Sender ID not provided'], Response::HTTP_BAD_REQUEST);
        }

        // Assuming you have a User entity with proper implementation
        $sender = $userRepository->find($loggedInUserId);

        if (!$sender) {
            return new JsonResponse(['error' => 'Sender not found'], Response::HTTP_NOT_FOUND);
        }

        $receiver = $userRepository->findOneBy(['username' => $data['receiver']]);

        if (!$receiver) {
            return new JsonResponse(['error' => 'Receiver not found'], Response::HTTP_NOT_FOUND);
        }

        $message = new Message();
        $message->setTitle($data['title']);
        $message->setContent($data['content']);
        $message->setSender($sender);  // Set the sender as the User entity
        $message->setReceiver($receiver);

        $entityManager = $doctrine->getManager();

        try {
            $entityManager->persist($message);
            $entityManager->flush();
        } catch (\Exception $e) {
            return new JsonResponse(['error' => 'Error saving message'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return new JsonResponse(['message' => 'Message sent successfully']);
    }
}