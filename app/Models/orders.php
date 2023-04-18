<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
    use HasFactory;
    public function user(){
        return $this -> belongsTo(User::class);
    }
    public function products(){
        return $this -> hasMany(product::class);
    }
}
