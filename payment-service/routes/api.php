<?php

use App\Http\Controllers\PaymentController;
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

Route::post('/payment/save', [PaymentController::class,'save_payment']);
Route::post('/payment/update', [PaymentController::class,'update_payment']);
Route::get('/payment/all', [PaymentController::class,'get_payment']);
Route::get('/payment/{id}', [PaymentController::class,'get_payment_by_id']);
Route::get('/payment/delete/{id}', [PaymentController::class,'delete_by_id']);
Route::get('/payment/invoice/not_pay', [PaymentController::class,'get_order_belum_dibayar']);
Route::get('/payment/paymenttype/all', [PaymentController::class,'get_paymenttypes']);