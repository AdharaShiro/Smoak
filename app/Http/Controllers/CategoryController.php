<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = category::all();
        return $category;
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
            'description' => 'required',
        ]);

        $category = new category();
        $category -> description = $request -> description;
        $category -> save();

        return $category;
    }

    /**
     * Display the specified resource.
     */
    public function show(category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, category $category)
    {
        $category = category::find($request -> id);
        $category -> description = $request -> description;
        $category -> save();

        return $category;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, category $category)
    {
        $category = category::destroy($request -> id);
        echo 'The category has been deleted successfully';
    }
}
