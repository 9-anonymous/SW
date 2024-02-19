<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    'app_accueil' => [[], ['_controller' => 'App\\Controller\\AppController::index'], [], [['text', '/']], [], [], []],
    'app_login' => [[], ['_controller' => 'App\\Controller\\LoginController::login'], [], [['text', '/login']], [], [], []],
    'app_logout' => [[], ['_controller' => 'App\\Controller\\LoginController::logout'], [], [['text', '/logout']], [], [], []],
    'api_send-email' => [[], ['_controller' => 'App\\Controller\\MailController::sendEmail'], [], [['text', '/send-email']], [], [], []],
    'app_messages_received' => [['receiverUsername'], ['_controller' => 'App\\Controller\\MessageController::getMessagesForUser'], [], [['variable', '/', '[^/]++', 'receiverUsername', true], ['text', '/messages']], [], [], []],
    'app_messages' => [[], ['_controller' => 'App\\Controller\\MessageController::sendMessage'], [], [['text', '/messages']], [], [], []],
    'api_register' => [[], ['_controller' => 'App\\Controller\\SignupController::register'], [], [['text', '/register']], [], [], []],
    'app_user' => [[], ['_controller' => 'App\\Controller\\UserController::listUsers'], [], [['text', '/users']], [], [], []],
    'App\Controller\AppController::index' => [[], ['_controller' => 'App\\Controller\\AppController::index'], [], [['text', '/']], [], [], []],
    'App\Controller\LoginController::login' => [[], ['_controller' => 'App\\Controller\\LoginController::login'], [], [['text', '/login']], [], [], []],
    'App\Controller\LoginController::logout' => [[], ['_controller' => 'App\\Controller\\LoginController::logout'], [], [['text', '/logout']], [], [], []],
    'App\Controller\MailController::sendEmail' => [[], ['_controller' => 'App\\Controller\\MailController::sendEmail'], [], [['text', '/send-email']], [], [], []],
    'App\Controller\MessageController::getMessagesForUser' => [['receiverUsername'], ['_controller' => 'App\\Controller\\MessageController::getMessagesForUser'], [], [['variable', '/', '[^/]++', 'receiverUsername', true], ['text', '/messages']], [], [], []],
    'App\Controller\MessageController::sendMessage' => [[], ['_controller' => 'App\\Controller\\MessageController::sendMessage'], [], [['text', '/messages']], [], [], []],
    'App\Controller\SignupController::register' => [[], ['_controller' => 'App\\Controller\\SignupController::register'], [], [['text', '/register']], [], [], []],
    'App\Controller\UserController::listUsers' => [[], ['_controller' => 'App\\Controller\\UserController::listUsers'], [], [['text', '/users']], [], [], []],
];
