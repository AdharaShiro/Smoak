<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    public function category(){
        return $this -> belongsTo(category::class);
    }
    public function order(){
        return $this -> belongsTo(orders::class);
    }    

    public function cart(){
        return $this -> hasMany(product::class, 'product_id');
    }
}
