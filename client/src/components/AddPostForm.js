import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addPost } from '../action/commentActions';


const AddPostForm = ({ addPost }) => {

    const [formData, onAdd] = useState(
        {
            title: "",
            body: ""
        },
        []
    );
    const { title, body } = formData;

    const onChange = (e) =>
    onAdd({ ...formData, [e.target.name]: e.target.value});


    const onSubmit = (e) => {
        e.preventDefault()

        if(!body) {
            alert('Please add text')
        }
        addPost(formData);
        onAdd({ title: "", body: "" });

    }
    
  return (
    <div>
    <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" 
            type="text" 
            placeholder="Insert Title" 
            value={title}
            onChange={(e) => onChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Body</Form.Label>
        {/* <Form.Control
            as="textarea"
            placeholder="Body"
            rows={3}
            name="body" 
            type="text" 
            value={body}
            onChange={(e) => onChange(e)}
        /> */}
        <CKEditor editor={ ClassicEditor } 
            name="body"
            model="editorData"
            data={body}
            onChange={(e, editor) => {
                onAdd({
                ...formData,
                body: editor.getData(),
                });
            }}
        ></CKEditor>
        </Form.Group>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button type="submit" value="Send" style={{ marginLeft: "auto" }} className="btn float-right">
                Add New Post
        </Button>
        </div>
  </Form>
  </div>
  )
}

AddPostForm.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(AddPostForm);
