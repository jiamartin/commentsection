import { FETCH_COMMENTS, ADD_COMMENT, FETCH_POSTS, ADD_POST } from "./types";
import axios from 'axios';

export const fetchComments = () => async dispatch =>{
    console.log('fetching');

    axios.get('http://127.0.0.1:8000/api/get_comments')
      .then(comments =>
        dispatch({
          type: FETCH_COMMENTS,
          payload: comments.data
        })
      );

};

export const fetchPosts = () => async dispatch =>{
    axios.get(`http://localhost:8000/api/get_posts`).then(res => {
        console.log('fetchingpost');
        if (res.status === 200) {
            dispatch({
                type: FETCH_POSTS,
                payload: res.data.posts
                })
        }
        console.log(res.data.posts);
    });
};


export const addComments = (formData) => async dispatch =>{
    console.log('adding');
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    console.log(formData);

    axios.post(`http://127.0.0.1:8000/api/add_comments`, formData, config).then(res => {
      if (res.status === 200) {
          axios.get(`http://127.0.0.1:8000/api/get_comments`).then(resp => {
        if (resp.status === 200) {
            dispatch({
                    type: ADD_COMMENT,
                    payload: resp.data.comments
                })

            }
        });
        }
    
      });
    
};

export const addPost = (formData) => async dispatch =>{
    console.log('adding');
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    console.log(formData);

    axios.post(`http://127.0.0.1:8000/api/add_post`, formData, config).then(res => {
      if (res.status === 200) {
          axios.get(`http://127.0.0.1:8000/api/get_posts`).then(resp => {
        if (resp.status === 200) {
            dispatch({
                    type: ADD_POST,
                    payload: resp.data.posts
                })

            }
        });
        }
    
      });
    
};


    // axios.get(`http://127.0.0.1:8000/api/get_comments`).then(res => {

    //     dispatch({
    //         type: FETCH_COMMENTS,
    //         payload: res.data.comments
    //         })
    //     
    //     console.log(res.data.comments);
    // });
    
// axios.post(`http://127.0.0.1:8000/api/add_comments`, formData, config).then(resp => {
//     if (resp.status === 200) {
//         dispatch({
//             type: ADD_COMMENT,
//             payload: resp.data.comments
//             })
//         }
//         });

//   const addComment = (comment) => {

//     axios.post(`http://127.0.0.1:8000/api/add_comments`, comment).then(res => {
//       if (res.status === 200) {
//           axios.get(`http://127.0.0.1:8000/api/get_comments`).then(resp => {
//         if (resp.status === 200) {
//           setComments(resp.data.comments)
//         }
//       });
//     }
//   });