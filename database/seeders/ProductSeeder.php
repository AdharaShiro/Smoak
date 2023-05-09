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
            'batteryCapacity' => '4700 mAh',
            'CPU' => 'NA',

            'price' => '$23,499.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Apple Iphone 14 plus',
            'model' => '14',
            'brand' => 'Apple',
            'color' => 'Azul',
            'photo' => '',

            'storage' => '128 Gb',
            'RAM' => '6 Gb RAM',
            'batteryCapacity' => '3095 mAh',
            'CPU' => 'CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia. GPU de 5 núcleos. Neural Engine de 16 núcleos',

            'price' => '$23,999.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Moto Edge 30 Ultra',
            'model' => 'Edge 30',
            'brand' => 'Motorola',
            'color' => 'Negro',
            'photo' => '',

            'storage' => '256 Gb',
            'RAM' => '12 Gb RAM',
            'batteryCapacity' => '4,600 mAh',
            'CPU' => 'Procesador 8 Núcleos',

            'price' => '$26,999.00',
            'stockQuantity' => '10',
        ]);
        
        //Accesorios
        DB::table('Product')->insert([
            'name' => 'Mouse Gamer Razer Viper ',
            'model' => 'RZ01-02550400-B ',
            'brand' => 'Razer',
            'color' => 'Negro',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'CPU' => 'NA',

            'price' => '$999.00',
            'stockQuantity' => '10',
        ]);
        
        DB::table('Product')->insert([
            'name' => 'Teclado Bluetooth Multidispositivos Logitech POP ',
            'model' => 'Fresh Vibes',
            'brand' => 'Logitech',
            'color' => 'Multicolor',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'CPU' => 'NA',

            'price' => '$1,799.00',
            'stockQuantity' => '10',
        ]);

        DB::table('Product')->insert([
            'name' => 'Silla Gamer Deportiva Corsair',
            'model' => 'TC60 FABRIC BLACK - CF-9010041-WW',
            'brand' => 'Corsair',
            'color' => 'Negro',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'CPU' => 'NA',

            'price' => '$4,299.00',
            'stockQuantity' => '10',
        ]);

        //Audio 
        
        DB::table('Product')->insert([
            'name' => 'Galaxy Buds 2 Pro',
            'model' => 'SM-R510NZAAXAR',
            'brand' => 'Samsung ',
            'color' => 'Grafito',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'Description' => 'Cancelación activa de ruido: reduce el ruido no deseado con Galaxy Buds2 Pro; utilizan cancelación activa inteligente de ruido* para silenciar incluso los sonidos exteriores más fuertes; 
             sintoniza lo que más importa sin ser molestado por los sonidos distraídos a tu alrededor. Calidad de sonido de alta fidelidad: el sonido de calidad de estudio no es solo para los profesionales; 
             siente cada nota como si estuvieras ahí con Galaxy Buds2 Pro** y obtén una experiencia auditiva de siguiente nivel, ya sea que estés saliendo a tu lista de reproducción o manteniéndote informado con un podcast.',

            'price' => '$2,947.00',
            'stockQuantity' => '10',
        ]);

        DB::table('Product')->insert([
            'name' => 'Barra de sonido Hisense',
            'model' => 'HS218',
            'brand' => 'Hisense',
            'color' => 'Negro',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'Description' => 'Barra de sonido Hisense HS218 viene con 4 lanzadores y un subwoofer inalámbrico, que te da un total de 200 vatios de audio superior, junto con la tecnología Dolby Audio y una afinación profesional de efecto de sonido de nivel maestro. 
             Actualizará el sonido de tu televisor al instante. Subwoofer inalámbrico: un subwoofer inalámbrico dedicado de 80 vatios ofrece las frecuencias de gama baja robustas que puntuan tus películas, música y juegos favoritos, sin cables desordenados. 
             Sentirás el "boom" mientras que los dos altavoces frontales proyectan frecuencias brillantes y claras de alto y medio.',

            'price' => '$4,299.00',
            'stockQuantity' => '10',
        ]);

        DB::table('Product')->insert([
            'name' => 'Silla Gamer Deportiva Corsair',
            'model' => 'TC60 FABRIC BLACK - CF-9010041-WW',
            'brand' => 'Corsair',
            'color' => 'Negro',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'CPU' => 'NA',

            'price' => '$3,329.00',
            'stockQuantity' => '10',
        ]);

        DB::table('Product')->insert([
            'name' => 'Bocina Sony Bluetooth',
            'model' => 'SRS-XB13/BC LA',
            'brand' => 'Sony',
            'color' => 'Azul',
            'photo' => '',

            'storage' => 'NA',
            'RAM' => 'NA',
            'batteryCapacity' => 'NA',
            'Description' => 'Sonido potente con EXTRA BASS, hasta 16hrs de duración de batería, con micrófono para función de manos libres, procesador de difusión del sonido dispersa aún más el sonido. 
            Resistente al agua y al polvo IP67, conecta dos bocinas para un sonido más potente y sonido estéreo. Carga rápida USB type-C.',

            'price' => '$1,279.00',
            'stockQuantity' => '10',
        ]);
    }
}
