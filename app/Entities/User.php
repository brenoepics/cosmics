<?php 
namespace App\Entities;

use CodeIgniter\Entity;

class User extends Entity
{ 
    public function verifyPassword($password)
    {    
        return password_verify($password, $this->password);
    }
}