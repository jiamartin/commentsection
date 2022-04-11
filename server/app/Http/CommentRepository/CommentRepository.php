<?php

namespace App\Http\CommentRepository;
use App\Comment;
use Illuminate\Http\Request;
use App\Http\CommentsRequests\CommentsRequest;

class CommentRepository implements CommentInterface{

    public function __construct(){
    }

    public function get_comments()
    {
        return Comment::orderBy('id', 'DESC')->get();
    }

    public function add_comments(CommentsRequest $request)
    {
        $comment = new Comment;
        $comment->comment_by = $request->input('comment_by');
        $comment->comment_desc = $request->input('comment_desc');
        $comment->save();

        return $comment;
    }
}