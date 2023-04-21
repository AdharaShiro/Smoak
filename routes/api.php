<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SubCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Las rutas que modiquen la información directamente de la BD tienen que ir en la parte del middleware
//Por el momento están ahí para pruebas pero para seguridad deben de estar ahí.
//No olvidar que post es para mandar información através del Request y el get simplemente te regresa información
//aunque el get puede servir para mandar información, esta se manda de una diferente manera.


//Login Routes
Route::post('/register',[PassportAuthController::class, 'register']);
Route::post('/login',[PassportAuthController::class, 'login']);

//Products Routes
Route::get('/products', ProductController::class, 'index');
Route::post('/product_store', ProductController::class, 'store');
Route::post('/product_update', ProductController::class, 'update');
Route::post('/product_delete', ProductController::class, 'destroy');

//Category Routes
Route::get('/categories', CategoryController::class, 'index');
Route::post('/category_store', CategoryController::class, 'store');
Route::post('/category_update', CategoryController::class, 'update');
Route::post('/category_delete', CategoryController::class, 'destroy');

//Subcategory Routes
Route::get('/subcategories', SubCategoryController::class, 'index');
Route::post('/subcategory_store', SubCategoryController::class, 'store');
Route::post('/subcategory_update', SubCategoryController::class, 'update');
Route::post('/subcategory_delete', SubCategoryController::class, 'destroy');

//Cart Routes
Route::get('/cart/{id}', CartController::class, 'index');
Route::post('/cart_store', CartController::class, 'store');
Route::post('/cart_update', CartController::class, 'update');
Route::post('/cart_delete', CartController::class, 'destroy');

//Order Routes
Route::get('/order/{id}', OrdersController::class, 'index');
Route::post('/order_store', OrdersController::class, 'store');
Route::post('/order_update', OrdersController::class, 'update');
Route::post('/order_delete', OrdersController::class, 'destroy');

//Address Routes
Route::get('/address/{id}', AddressController::class, 'index');
Route::post('/address_store', AddressController::class, 'store');
Route::post('/address_update', AddressController::class, 'update');
Route::post('/address_delete', AddressController::class, 'destroy');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
