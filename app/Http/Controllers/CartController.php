<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($user)
    {
        //Aquí en el momento de mandar a buscar un carrito se debe de filtrar por el usuario que tiene el carrito activo en la tabla de carritos.
        //Ya que al ponerle All() como a otros métodos te traería todo lo de todos los usuarios y no lo de los activos.
        // Obtener los resultados del primer query
        $cartItems = Cart::where('user_id', $user)->pluck('product_id');

        // Obtener los resultados del segundo query utilizando los valores del primer query
        $products = Product::whereIn('id', $cartItems)->get();

        // Convertir los resultados en formato JSON
        $productsJson = $products->toJson();

        // Retornar el resultado JSON
        return $productsJson;
    }


    public function countProducts($user)
    {
        $countProducts = cart::where('user_id', $user)->count();
        return $countProducts;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required',
            'product_id' => 'required',
            'quantity' => 'required',
        ]);

        $cart = new cart();
        $cart->user_id = $request->user_id;
        $cart->product_id = $request->product_id;
        $cart->quantity = $request->quantity;
        $cart->save();

        return $cart;
    }

    /**
     * Display the specified resource.
     */
    public function show(cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, cart $cart)
    {
        $cart = cart::find($request->id);
        $cart->user_id = $request->user_id;
        $cart->product_id = $request->product_id;
        $cart->quantity = $request->quantity;
        $cart->save();

        return $cart;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, cart $cart)
    {
        $cart = cart::destroy($request->id);
        echo 'The cart has been deleted successfully';
    }
}
