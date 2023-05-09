<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //LAPTOPS
        DB::table('SubCategory')->insert([
            'Category_id' => '1',
            'description' => 'HUAWEI'
        ]);

        DB::table('SubCategory')->insert([
            'Category_id' => '1',
            'description' => 'ASUS'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '1',
            'description' => 'HP'
        ]);

        //Telefonos Celulares
        DB::table('SubCategory')->insert([
            'Category_id' => '2',
            'description' => 'SAMSUNG'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '2',
            'description' => 'APPLE'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '2',
            'description' => 'MOTOROLA'
        ]);

        //Accesorios
        DB::table('SubCategory')->insert([
            'Category_id' => '3',
            'description' => 'MOUSE'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '3',
            'description' => 'TECLADO'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '3',
            'description' => 'SILLA GAMER'
        ]);

        //Audio
        
        DB::table('SubCategory')->insert([
            'Category_id' => '4',
            'description' => 'BARRA DE SONIDO'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '4',
            'description' => 'BOCINA BLUETOOTH'
        ]);
        
        DB::table('SubCategory')->insert([
            'Category_id' => '4',
            'description' => 'AUDIFONOS TWS'
        ]);
    }
}
