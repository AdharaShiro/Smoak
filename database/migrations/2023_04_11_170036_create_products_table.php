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
            $table->unsignedBigInteger('subCategory_id'); //Relacion en la llave foranea (Tiene que ser igual dentro de las primeras comillas)
            $table->foreign('subCategory_id')->references('id')->on('sub_categories')->onDelete('cascade');
            $table->timestamps();

            $table->string('Name');
            $table->string('Model');
            $table->string('band');
            $table->string('color');
            $table->string('photo');
            $table->string('precio');


            //Nota: En esta parte -> sub_categories -> Este es el nombre de la tabla en la base de datos) 
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
