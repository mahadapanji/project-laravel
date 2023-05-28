<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //

    public function get_user(Request $req){
        $users = Users::where('name', '=', $req->username)
                ->where('password', '=', $req->password)
                ->get();
    
        return response()->json($users);
       // return 'test dulu ga sih2';
    }

    public function save_user(Request $req){
        $users = new Users();
        $users->name = $req->name;
        $users->password = $req->password;

        $users->save();
        return response()->json("Save Sukses");
       // return 'test dulu ga sih2';
    }
}
