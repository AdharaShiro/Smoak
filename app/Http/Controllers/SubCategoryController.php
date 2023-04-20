<?php

namespace App\Http\Controllers;

use App\Models\subCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subCategory = subCategory::all();
        return $subCategory;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'Category_id' => 'required',
            'description' => 'required',
        ]);

        //la estructura para almacenar un campo en una tabla de la base de datos es
        //la variable que usaremos como objeto, siempre comienza con $
        //después se usa el objeto con una -> indicando el nombre de cada campo que tenga la BD
        //se le tiene que asignar el $request que viene siendo lo que recibe el método y con
        //el nombre de la variable que se le otorga en cada campo desde el axios (o desde postman en su defecto)
        $subCategory = new subCategory();
        $subCategory -> Category_id = $request -> Category_id;
        $subCategory -> description = $request -> description;

        //el método save nos ayuda a que se guarde todo lo que se encuentra en el arreglo de $products en la BD
        $subCategory -> save();

        return $subCategory;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, subCategory $subCategory)
    {
        $subCategory = subCategory::find($request->id);
        $subCategory -> Category_id = $request -> Category_id;
        $subCategory -> description = $request -> description;

        $subCategory -> save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, subCategory $subCategory)
    {
        $subCategory = subCategory::destroy($request->id);
        echo 'The subcategory has been deleted successfully.';
    }
}
