<?php

namespace App\Http\Controllers;

use App\Models\UserFavorite;
use Illuminate\Http\Request;

class UserFavoriteController extends Controller
{
    public function index($user_id){
        $UserFavorite = UserFavorite::where('user_id', $user_id)->orderBy('created_at', 'asc')->get();
        return $UserFavorite;
    }

    public function addFavorite(Request $request){
        $addFavorite = new UserFavorite();
        $addFavorite -> user_id = $request -> user_id;
        $addFavorite -> product_id = $request -> product_id;
        $addFavorite -> save();

        return $addFavorite;
    }

    public function deleteFavorite(Request $request){
        $deleteFavorite = UserFavorite::destroy($request -> id);
        return $deleteFavorite;
    }

}
