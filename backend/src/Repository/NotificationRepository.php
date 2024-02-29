<?php
// src/Repository/NotificationRepository.php
namespace App\Repository;

use App\Entity\Notification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;

class NotificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Notification::class);
    }
    public function findUnreadNotificationsForUser(User $user): array
    {
        return $this->createQueryBuilder('n')
            ->where('n.receiver = :user')
            ->andWhere('n.readAt IS NULL')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }
    
    public function markNotificationsAsRead(User $user): void
    {
        $this->createQueryBuilder('n')
            ->update()
            ->set('n.readAt', ':now')
            ->where('n.receiver = :user')
            ->andWhere('n.readAt IS NULL')
            ->setParameter('now', new \DateTime())
            ->setParameter('user', $user)
            ->getQuery()
            ->execute();
    }
    
    // Add custom methods if needed
}
