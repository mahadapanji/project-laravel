<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function get_product(){
        $osi = array();
        $statusCode = 200;

        try {

            $product = Product::all();
            
            $osi = array('message' => 'success',
            'data' => $product);
          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function get_product_by_id($id){
        $osi = array();
        $statusCode = 200;

        try {

            $product = Product::find($id);
            
            $osi = array('message' => 'success',
            'data' => $product);
          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function save_product(Request $req){
        $osi = array();
        $statusCode = 200;

        try {

            $product = new Product();
            $product->product_code = $req->product_code;
            $product->name = $req->name;
            $product->unit_code = $req->unit_code;
            $product->price = $req->price;
    
            $product->save();
    
            
            $osi = array('message' => 'success');
          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function update_product(Request $req){
        $osi = array();
        $statusCode = 200;

        try {



            $product = Product::find($req->id);
 
            // $user->email = 'john@foo.com';
            
            // $user->save();

            // $product = new Product();
            $product->product_code = $req->product_code;
            $product->name = $req->name;
            $product->unit_code = $req->unit_code;
            $product->price = $req->price;
    
            $product->save();
    
            
            $osi = array('message' => 'success');
          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function delete_by_id($id){
        $osi = array();
        $statusCode = 200;

        try {

            $product = Product::destroy($id);
            
            $osi = array('message' => 'success');
          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }
}
