<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function get_payment()
    {
        $osi = array();
        $statusCode = 200;

        try {

            $payment = Payment::all();

            $osi = array(
                'message' => 'success',
                'data' => $payment
            );
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function get_payment_by_id($id)
    {
        $osi = array();
        $statusCode = 200;

        try {

            $payment = Payment::find($id);

            $osi = array(
                'message' => 'success',
                'data' => $payment
            );
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function save_payment(Request $req)
    {
        $osi = array();
        $statusCode = 200;



        try {
            $payment_avaiable = DB::table('payments')
                ->where('payment_code', '=', $req->payment_code)
                ->get();

            $payment_avaiable_count = $payment_avaiable->count();

            if ($payment_avaiable_count > 0) {
                $statusCode = 500;
                $osi = array('message' => 'Kode payment Sudah Terpakai !');
            }

            if ($statusCode == 200) {
                $payment = new Payment();
                $payment->payment_code = $req->payment_code;
                $payment->order_code = $req->order_code;
                $payment->payment_type = $req->payment_type;
                $payment->payment_note = $req->payment_note;

                $payment->save();


                $osi = array('message' => 'success');
            }
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function update_payment(Request $req)
    {
        $osi = array();
        $statusCode = 200;

        try {



            $payment = Payment::find($req->id);

            $payment->payment_code = $req->payment_code;
            $payment->order_code = $req->order_code;
            $payment->payment_type = $req->payment_type;
            $payment->payment_note = $req->payment_note;

            $payment->save();


            $osi = array('message' => 'success');
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function delete_by_id($id)
    {
        $osi = array();
        $statusCode = 200;

        try {

            $payment = Payment::destroy($id);

            $osi = array('message' => 'success');
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function get_order_belum_dibayar()
    {
        $osi = array();
        $statusCode = 200;

        try {

            $orders = DB::table('orders')
            ->leftJoin('payments', 'orders.order_code', '=', 'payments.order_code')
            ->where('payments.payment_type', '=', null)
            ->get('orders.order_code');

            $osi = array(
                'message' => 'success',
                'data' => $orders
            );
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }

    public function get_paymenttypes()
    {
        $osi = array();
        $statusCode = 200;

        try {

            $payment_types = DB::table('payment_types')
            ->get();

            $osi = array(
                'message' => 'success',
                'data' => $payment_types
            );
        } catch (\Exception $e) {

            $osi = array('message' => $e->getMessage());
            $statusCode = 500;
        }

        return response()->json($osi)->setStatusCode($statusCode);
    }
}
