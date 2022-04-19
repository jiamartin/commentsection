<?php

namespace App\Http\CommentRepository;
use App\Comment;
use App\Post;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\CommentsRequests\CommentsRequest;


class CommentRepository implements CommentInterface{

    public function __construct(){
    }

    public function get_comments()
    {   
        return Comment::with('parents_child')->get();
        ///return Comment::orderBy('id', 'DESC')->get();
    }

    public function get_posts()
    {   
        return Post::orderBy('id', 'DESC')->get();
    }

    public function add_post(Request $request)
    {   
        $post = new Post;
        $post->title = $request->input('title');
        $post->body = $request->input('body');
        $post->save();

        return $post;
    }

    public function add_comments(CommentsRequest $request)
    {
        // $comment = new Comment;
        // $comment->comment_by = $request->input('comment_by');
        // $comment->comment_desc = $request->input('comment_desc');
        // $comment->save();

        // return $comment;
    }
}