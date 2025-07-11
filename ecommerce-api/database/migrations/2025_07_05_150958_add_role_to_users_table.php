<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
              Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('client'); // ✅ إضافة العمود
        });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
              Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role'); // ✅ حذف العمود عند التراجع
        });
        });
    }
};
