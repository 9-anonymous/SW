<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/' => [[['_route' => 'app_accueil', '_controller' => 'App\\Controller\\AppController::index'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\LoginController::login'], null, ['POST' => 0], null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\LoginController::logout'], null, ['POST' => 0], null, false, false, null]],
        '/send-email' => [[['_route' => 'api_send-email', '_controller' => 'App\\Controller\\MailController::sendEmail'], null, ['POST' => 0], null, false, false, null]],
        '/messages' => [[['_route' => 'app_messages', '_controller' => 'App\\Controller\\MessageController::sendMessage'], null, ['POST' => 0], null, false, false, null]],
        '/register' => [[['_route' => 'api_register', '_controller' => 'App\\Controller\\SignupController::register'], null, ['POST' => 0], null, false, false, null]],
        '/users' => [[['_route' => 'app_user', '_controller' => 'App\\Controller\\UserController::listUsers'], null, ['GET' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/messages/([^/]++)(?'
                    .'|(*:63)'
                    .'|(*:70)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        63 => [[['_route' => 'app_messages_received', '_controller' => 'App\\Controller\\MessageController::getMessagesForUser'], ['receiverUsername'], ['GET' => 0], null, false, true, null]],
        70 => [
            [['_route' => 'app_message', '_controller' => 'App\\Controller\\MessageController::getMessageById'], ['id'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
