<?php

namespace App\Http\CommentRepository;
use App\Comment;
use Illuminate\Http\Request;
use App\Http\CommentsRequests\CommentsRequest;

interface CommentInterface
{
    public function get_comments();
    public function add_comments(CommentsRequest $request);
}