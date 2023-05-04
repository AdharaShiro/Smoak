<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Laptops
        DB::table('Product')->insert([
            'name' => 'Laptop Huawei Matebook ',
            'model' => 'D14',
            'brand' => 'HUAWEI',
            'color' => 'Gris',
            'photo' => '',

            'storage' => '256GB PCIe SSD ',
            'RAM' => '8GB RAM LPDDR4 ',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i3-10110U ',

            'price' => '$13,999.00',
            'stockQuantity' => '10',
        ]);

        DB::table('Product')->insert([
            'name' => 'Laptop Gaming Asus TUF GAMING',
            'model' => 'F15',
            'brand' => 'ASUS',
            'color' => 'Negro',
            'photo' => '',

            'storage' => '512GB SSD NVMe',
            'RAM' => '8GB RAM LPDDR4',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i5-10300H ',

            'price' => '$26,399.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Laptop HP 14',
            'model' => 'DK1032WM',
            'brand' => 'HP',
            'color' => 'Plata',
            'photo' => '',

            'storage' => '128GB SSD ',
            'RAM' => '4GB RAM ',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Gráficos Radeon Vega 3 ',

            'price' => '$10,999.00',
            'stockQuantity' => '10',
        ]);
        
        //Telefonos Celulares
        DB::table('Product')->insert([
            'name' => 'Samsung Galaxy S23 5G ',
            'model' => 'F15',
            'brand' => 'SAMSUNG',
            'color' => 'Blanco',
            'photo' => '',

            'storage' => '512GB SSD NVMe',
            'RAM' => '8GB RAM LPDDR4',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i5-10300H ',

            'price' => '$26,399.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Laptop Gaming Asus TUF GAMING',
            'model' => 'F15',
            'brand' => 'ASUS',
            'color' => 'Negro',
            'photo' => '',

            'storage' => '512GB SSD NVMe',
            'RAM' => '8GB RAM LPDDR4',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i5-10300H ',

            'price' => '$26,399.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Laptop Gaming Asus TUF GAMING',
            'model' => 'F15',
            'brand' => 'ASUS',
            'color' => 'Negro',
            'photo' => '',

            'storage' => '512GB SSD NVMe',
            'RAM' => '8GB RAM LPDDR4',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i5-10300H ',

            'price' => '$26,399.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Laptop Gaming Asus TUF GAMING',
            'model' => 'F15',
            'brand' => 'ASUS',
            'color' => 'Negro',
            'photo' => '',

            'storage' => '512GB SSD NVMe',
            'RAM' => '8GB RAM LPDDR4',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i5-10300H ',

            'price' => '$26,399.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Laptop Gaming Asus TUF GAMING',
            'model' => 'F15',
            'brand' => 'ASUS',
            'color' => 'Negro',
            'photo' => '',

            'storage' => '512GB SSD NVMe',
            'RAM' => '8GB RAM LPDDR4',
            'batteryCapacity' => '56 Wh',
            'CPU' => 'Intel Core i5-10300H ',

            'price' => '$26,399.00',
            'stockQuantity' => '10',
        ]);
    }
}
