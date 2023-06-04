<?php

use App\Http\Controllers\OrderController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/order/save', [OrderController::class,'save_order']);
Route::post('/order/update', [OrderController::class,'update_order']);
Route::get('/order/all', [OrderController::class,'get_order']);
Route::get('/order/get/{id}', [OrderController::class,'get_order_by_id']);
Route::get('/order/delete/{order_code}', [OrderController::class,'delete_by_order_code']);


Route::get('/order/couriers', [OrderController::class,'get_couriers']);
Route::get('/order/provinces', [OrderController::class,'get_provinces']);
Route::get('/order/cities/{prov_id}', [OrderController::class,'get_cities']);
Route::post('/order/ongkir', [OrderController::class,'get_ongkir']);