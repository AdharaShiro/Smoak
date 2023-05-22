<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    public function subcategory(){
        return $this -> belongsTo(subcategory::class);
    }
    public function order(){
        return $this -> belongsTo(orders::class);
    }    

    public function cart(){
        return $this -> hasMany(cart::class);
    }
}
