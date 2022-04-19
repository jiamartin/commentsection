import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import ReactHtmlParser from "html-react-parser";


const Post = ({post}) => {


    return (
        <>
            <Card className='mb-3' style={{ width: '18rem', minHeight: '15rem', maxHeight: '15rem' }}>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                {ReactHtmlParser(post.body.substring(0, 100))}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button onClick={() => console.log(post.id)} className="btn btn-primary" data-toggle="modal">Edit</Button>
            </Card.Footer>
            </Card>

        </>
    )
}

    
export default Post;