<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Orderdetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public function save_order(Request $req){
        $osi = array();
        $statusCode = 200;

        try {
            //pengecekan untuk kode order yang sama
            $order_avaiable = DB::table('orders')
            ->where('order_code', '=', $req->order_code)
            ->get();

            $order_avaiable_count = $order_avaiable->count();

            if ($order_avaiable_count > 0) {
                $statusCode = 500;
                $osi = array('message' => 'Kode Order Sudah Terpakai !');
            }

            if ($statusCode == 200) {
                $order = new Order();
                $order->order_code = $req->order_code;
                $order->name = $req->name;
                $order->address = $req->address;
                $order->regency_origin = $req->regency_origin;
                $order->province_origin = $req->province_origin;
                $order->regency_destination = $req->regency_destination;
                $order->province_destination = $req->province_destination;
                $order->courier = $req->courier;
                $order->weight = $req->weight;
                $order->shipping_cost = $req->shipping_cost;
                $order->total_price = $req->total_price;
        
                $order->save();


                foreach ($req->details as $detail) {
                    $order_detail = new Orderdetail();
                    $order_detail->order_code = $req->order_code;
                    $order_detail->product_code = $detail['product_code'];
                    $order_detail->product_name = $detail['product_name'];
                    $order_detail->product_unit_code = $detail['product_unit_code'];
                    $order_detail->qty = $detail['qty'];
                    $order_detail->product_price = $detail['product_price'];
                    $order_detail->product_total_price = $detail['product_total_price'];
                    $order_detail->save();

                }

                $osi = array('message' => 'success');
            }
          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function get_ongkir(Request $req){
        $osi = array();
        $statusCode = 200;

        try {

            $response = Http::asForm()
            ->withHeaders([
                'key' => '1b457665a85c16e49e2b4df08f8f61d8'
            ])->post('https://api.rajaongkir.com/starter/cost', [
                'origin' => $req->origin,
                'destination' => $req->destination,
                'weight' => $req->weight,
                'courier' => $req->courier,
            ]);

            if(!$response->failed()){

                $osi = array('message' => 'success',
                'data' => $response['rajaongkir']);
            }else{
                
                $statusCode = 500;
                $osi = array('message' => 'failed',
                'data' => $response['rajaongkir']);
            }

          
          } catch (\Exception $e) {
          
            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
          }

        return response()->json($osi)->setStatusCode($statusCode);
    }


}
