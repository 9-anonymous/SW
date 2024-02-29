<?php
namespace App\Controller;
use App\Entity\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\NotificationRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
class NotificationController extends AbstractController
{
    #[Route('/notifications/unread', name: 'app_notifications_unread', methods: ['GET'])]
    public function getUnreadNotifications(NotificationRepository $notificationRepository): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) {
            return new JsonResponse(['error' => 'Not authenticated'], Response::HTTP_UNAUTHORIZED);
        }
    
        $notifications = $notificationRepository->findUnreadNotificationsForUser($user);
        $notificationArray = [];
        foreach ($notifications as $notification) {
            $notificationArray[] = [
                'id' => $notification->getId(),
                'message' => $notification->getMessage(),
                // Add other necessary fields
            ];
        }
    
        return new JsonResponse(['notifications' => $notificationArray]);
    }
    
    #[Route('/notifications/mark-as-read', name: 'app_notifications_mark_as_read', methods: ['POST'])]
    public function markNotificationsAsRead(NotificationRepository $notificationRepository): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) {
            return new JsonResponse(['error' => 'Not authenticated'], Response::HTTP_UNAUTHORIZED);
        }
    
        $notificationRepository->markNotificationsAsRead($user);
    
        return new JsonResponse(['message' => 'Notifications marked as read']);
    }
}