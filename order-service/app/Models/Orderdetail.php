<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderdetail extends Model
{
    use HasFactory;
    protected $table = 'order_details';
    protected $fillable = ['order_code'
                            ,'product_code'
                            ,'product_name'
                            ,'product_unit_code'
                            ,'qty'
                            ,'product_price'
                            ,'product_total_price'
                        ];
}
