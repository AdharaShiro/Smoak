<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = product::all();
        return $products;
    }

    public function product_id($product_id){
        $product = product::find($product_id);
        return $product;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'model' => 'required',
            'brand' => 'required',
            'color' => 'required',
            'photo' => 'required',
            'price' => 'required',
            'stockQuantity' => 'required',
            'subCategory' => 'required',
        ]);

        //la estructura para almacenar un campo en una tabla de la base de datos es
        //la variable que usaremos como objeto, siempre comienza con $
        //después se usa el objeto con una -> indicando el nombre de cada campo que tenga la BD
        //se le tiene que asignar el $request que viene siendo lo que recibe el método y con
        //el nombre de la variable que se le otorga en cada campo desde el axios (o desde postman en su defecto)
        $product = new product();
        $product -> name = $request -> name;
        $product -> model = $request -> model;
        $product -> brand = $request -> brand;
        $product -> color = $request -> color;
        $product -> photo = $request -> photo;
        $product -> storage = $request -> storage;
        $product -> RAM = $request -> RAM;
        $product -> batteryCapacity = $request -> batteryCapacity;
        $product -> description = $request -> description;
        $product -> CPU = $request -> CPU;
        $product -> price = $request -> price;
        $product -> stockQuantity = $request -> stockQuantity;
        $product -> subCategory_id = $request -> subCategory;

        //el método save nos ayuda a que se guarde todo lo que se encuentra en el arreglo de $products en la BD
        $product -> save();

        return $product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, product $product)
    {
        //la estructura del update es la misma que la de store, solamente que aquí ya tenemos toda la info del producto
        //con product::find($request->id); (y find sirve solamente para id, si buscas por otros campos será con where)
        //podrás traer toda la info del producto que buscas por su id y sobreescribir los datos del arreglo y esto se guarda.
        //Al tener un id específico y no estar vacio solamente actualizará la información, más no creará otro.
        $product = product::find($request->id);
        $product -> name = $request -> name;
        $product -> model = $request -> model;
        $product -> brand = $request -> brand;
        $product -> color = $request -> color;
        $product -> foto = $request -> foto;
        $product -> price = $request -> price;
        $product -> stockQuantity = $request -> stockQuantity;
        $product -> subCategory_id = $request -> subCategory;

        //el método save nos ayuda a que se guarde todo lo que se encuentra en el arreglo de $products en la BD
        $product -> save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, product $product)
    {
        $products = product::destroy($request->id);
        echo 'The product has been deleted successfully.';
    }

    public function lastAdded (){
        $lastProducts = product::orderBy('created_at', 'desc')->take(6)->get();
        return $lastProducts;

    }
}
