<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
class MailController extends AbstractController
{
    #[Route('/send-email', name: 'api_send-email', methods: ['POST'])]

    public function sendEmail(Request $request, MailerInterface $mailer): Response
    {
        $emailData = json_decode($request->getContent(), true);
        $email = (new Email())
            ->from('no-reply@example.com')
            ->to($emailData['email'])
            ->subject('Message from ' . $emailData['username'])
            ->text($emailData['content']);

        $mailer->send($email);

        return new Response('Email sent successfully');
    }
}
