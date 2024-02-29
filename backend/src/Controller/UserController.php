<?php

namespace App\Controller;
use App\Repository\UserRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
 use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

class UserController extends AbstractController
{
    #[Route('/users', name: 'app_user', methods: ['GET'])]
    public function listUsers(Request $request, ManagerRegistry $doctrine, UserRepository $userRepository): JsonResponse
    
        {
            $users = $userRepository->findAll();
            $usernames = [];
            foreach ($users as $user) {
                $usernames[] = $user->getUsername();
            }
            return new JsonResponse($usernames);
        }
    }