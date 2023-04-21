<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($user)
    {
        $address = Address::where('usuario', $user)->get();
        return $address;
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
            'houseNumber' => 'required',
            'city' => 'required',
            'street' => 'required',
            'subdivision' => 'required',
            'postCode' => 'required',
            'user_id' => 'required',
        ]);

        $address = new Address();
        $address -> houseNumber = $request -> houseNumber;
        $address -> city = $request -> city;
        $address -> street = $request -> street;
        $address -> subdivision = $request -> subdivision;
        $address -> postCode = $request -> postCode;
        $address -> user_id = $request -> user_id;
        $address -> save();

        return $address;
    }

    /**
     * Display the specified resource.
     */
    public function show(Address $address)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Address $address)
    {
        $address -> cart::find($request -> id);
        $address -> houseNumber = $request -> houseNumber;
        $address -> city = $request -> city;
        $address -> street = $request -> street;
        $address -> subdivision = $request -> subdivision;
        $address -> postCode = $request -> postCode;
        $address -> user_id = $request -> user_id;
        $address -> save();

        return $address;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Address $address)
    {
        $address = Address::destroy($request -> id);
        echo 'The address has been deleted successfully';
    }
}
