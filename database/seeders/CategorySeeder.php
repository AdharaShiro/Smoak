<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Computadoras
        DB::table('Category')->insert([
            'id' => '1',
            'description' => 'COMPUTADORAS',
        ]);

        //Telefonos Celulares
        DB::table('Category')->insert([
            'id' => '2',
            'description' => 'TELEFONOS CELULARES',
        ]);

        //Audio
        DB::table('Category')->insert([
            'id' => '3',
            'description' => 'AUDIO',
        ]);

        //Accesorios
        DB::table('Category')->insert([
            'id' => '4',
            'description' => 'ACCESORIOS',
        ]);
    }
}
