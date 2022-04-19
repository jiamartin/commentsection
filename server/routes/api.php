<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('get_comments', 'CommentsController@index');
Route::get('get_posts', 'PostsController@index');
Route::post('add_comments', 'CommentsController@store');
Route::post('add_post', 'PostsController@store');

