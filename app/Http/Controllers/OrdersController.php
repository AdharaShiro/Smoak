<?php

namespace App\Http\Controllers;

use App\Models\orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = orders::all();
        return $orders;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
            'finalPrice' => 'required',
        ]);
        
        $orders = new orders();
        $orders -> user_id = $request -> user_id;
        $orders -> product_id = $request -> product_id;
        $orders -> quantity = $request -> quantity;
        $orders -> finalPrice = $request -> finalPrice;
        $orders -> save();

        return $orders;
    }

    /**
     * Display the specified resource.
     */
    public function show(orders $orders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, orders $orders)
    {
        $orders = orders::find($request -> id);
        $orders -> user_id = $request -> user_id;
        $orders -> product_id = $request -> product_id;
        $orders -> quantity = $request -> quantity;
        $orders -> finalPrice = $request -> finalPrice;
        $orders -> save();

        return $orders;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, orders $orders)
    {
        $orders = orders::destroy($request->id);
        echo 'The order has been deleted successfully';
    }
}
