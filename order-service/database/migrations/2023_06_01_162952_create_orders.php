<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_code');
            $table->string('name');
            $table->string('address');

            
            $table->string('regency_origin');
            $table->string('province_origin');
            $table->string('regency_destination');
            $table->string('province_destination');
            $table->string('courier');
            $table->decimal('weight');

            $table->decimal('shipping_cost');
            $table->decimal('total_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
