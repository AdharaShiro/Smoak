<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class PassportAuthController extends ResponseController
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request -> all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $token = $user->createToken('MyApp')->accessToken;
            
        return response()->json(['token' => $token, 'user' => $user], 200);
    }

    public function login (Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $token = $user->createToken('MyApp')->accessToken;
            
            return response()->json(['token' => $token, 'user' => $user], 200);
        }else{
            return response()->json(['error'=>'Unauthorized'], 401);
        }
    }
}
