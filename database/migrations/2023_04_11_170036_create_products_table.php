<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model');
            $table->string('brand');
            $table->string('color');
            $table->string('photo');

            //Nullable es un método para indicar que si el campo no se agrega no existirá un error por falta del mismo
            //esto es por el caso de que se vendan productos de tecnología que no cuenten con almacenamiento o dicha 
            //característica
            $table->string('storage') -> nullable();
            $table->string('RAM') -> nullable();
            $table->string('batteryCapacity') -> nullable();
            $table->string('CPU') -> nullable();

            //el componente float se basa en 3 parametros, el nombre del campo, la cantidad de enteros que quieres y la cantidad de decimales que quieres
            //en este caso es precio, con 6 enteros y 2 decimales (999,999.99)
            $table->float('price', 6, 2);
            $table->integer('stockQuantity');
            
            //Nota: En esta parte -> on(sub_categories) -> sub_categories -> es el nombre de la tabla en la base de datos) 
            $table->unsignedBigInteger('subCategory_id'); //Relacion en la llave foranea (Tiene que ser igual dentro de las primeras comillas)
            $table->foreign('subCategory_id')->references('id')->on('sub_categories')->onDelete('cascade');
            
            $table->timestamps();
            
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
