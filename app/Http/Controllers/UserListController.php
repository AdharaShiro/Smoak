<?php

namespace App\Http\Controllers;

use App\Models\UserList;
use Illuminate\Http\Request;

class UserListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($user_id)
    {
        $UserList = UserList::where('user_id', $user_id)->orderBy('created_at', 'asc')->get();
        return $UserList;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function addList(Request $request){
        $addList = new UserList();
        $addList -> user_id = $request -> user_id;
        $addList -> product_id = $request -> product_id;
        $addList -> listname = $request -> listname;
        $addList -> save();

        return $addList;
    }

    /**
     * Store a newly created resource in storage.
     */
    
    public function changeListName(Request $request, UserList $userList)
    {
        $userList = UserList::where('user_id', $request -> user_id)->pluck('id');
        UserList::whereIn('id', $userList)->update(['listname' => $request -> listname]); 
        return $userList;    
    }

    public function moveList(Request $request){
        $userList = UserList::where('user_id', $request -> user_id)
        ->where('product_id', $request -> product_id)
        ->get();
        $userList -> listname = $request -> listname;
        $userList -> save();

        return $userList;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $userList = UserList::destroy($request -> id);
        return $userList;
    }
}
