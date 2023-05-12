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
        //Computadoras 
        DB::table('sub_categories')->insert([
            'id' => '1',
            'Category_id' => '1',
            'description' => 'Laptop'
            
        ]);

        DB::table('sub_categories')->insert([
            'id' => '2',
            'Category_id' => '1',
            'description' => 'Computadora de escritorio'
        ]);

        
        //Telefonos Celulares
        DB::table('sub_categories')->insert([
            'id' => '3',
            'Category_id' => '2',
            'description' => 'Android'
        ]);
        DB::table('sub_categories')->insert([
            'id' => '4',
            'Category_id' => '2',
            'description' => 'iOS'
        ]);
        
    
        //Accesorios
        DB::table('sub_categories')->insert([
            'id' => '5',
            'Category_id' => '3',
            'description' => 'MOUSE'
        ]);
        DB::table('sub_categories')->insert([
            'id' => '6',
            'Category_id' => '3',
            'description' => 'TECLADO'
        ]);
        DB::table('sub_categories')->insert([
            'id' => '7',
            'Category_id' => '3',
            'description' => 'SILLAS'
        ]);
        DB::table('sub_categories')->insert([
            'id' => '8',
            'Category_id' => '3',
            'description' => 'MOUSE PAD'
        ]);


        //Audio
        DB::table('sub_categories')->insert([
            'id' => '9',
            'Category_id' => '4',
            'description' => 'BARRA DE SONIDO'
        ]);

        DB::table('sub_categories')->insert([
            'id' => '10',
            'Category_id' => '4',
            'description' => 'BOCINA'
        ]);
        DB::table('sub_categories')->insert([
            'id' => '11',
            'Category_id' => '4',
            'description' => 'AUDIFONOS'
        ]);
        
    }
}
