<?php

use App\Http\Controllers\ProductController;
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


Route::post('/product/save', [ProductController::class,'save_product']);
Route::post('/product/update', [ProductController::class,'update_product']);
Route::get('/product/all', [ProductController::class,'get_product']);
Route::get('/product/{id}', [ProductController::class,'get_product_by_id']);
Route::get('/product/delete/{id}', [ProductController::class,'delete_by_id']);