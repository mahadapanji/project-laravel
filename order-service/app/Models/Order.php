<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = ['order_code'
                            ,'name'
                            ,'address'
                            ,'regency_origin'
                            ,'province_origin'
                            ,'regency_destination'
                            ,'province_destination'
                            ,'courier'
                            ,'weight'
                            ,'shipping_cost'
                            ,'total_price'
                        ];
}
