import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/commentActions';
import Post from './Blog';
import AddPostForm from './AddPostForm';
import { Modal } from 'react-bootstrap';

class Blogs extends Component {

    componentDidMount() {
        this.props.fetchPosts();
      }

      constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
          this.hideModal();
        }
    }

      render() {

        return (
        <div className="post-image " style={{maxWidth: '100%'}}>
            <stack>
           <div className="row d-flex justify-content-center"><h1 >Blog Here</h1></div>
            <button onClick={this.showModal} data-toggle="modal" className="btn mx-auto">Add Post</button>
            <div className='row'>
            {this.props.posts.map(post => (
            <span key={post.id} className="col-md-3">
                <Post post={post} />
            </span>
          ))}
            </div>
            
           <div className=" mx-auto"><Link to="/" >Go back</Link></div>

           <Modal show={this.state.show} onHide={this.hideModal} size="lg" style={{maxWidth: '1000'}}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddPostForm />
            </Modal.Body>
        </Modal>
           </stack>
        </div>
        )
      }
    }

Blogs.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.comments.items,
  newPost: state.comments.items
});
    
export default connect(mapStateToProps, {fetchPosts})(Blogs);

// import pic from "../Assets/post.jpg";
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Blogs = () => {
//     return (
//         <div className="post-image" style={{maxWidth: '100%'}}>
//             <stack direction="column" justifyContent="center" alignItems="center">
//            <div className="row "><h1 >Blog Here</h1></div>
//             <button className="btn">Add Post</button>
//            <div className="/"><Link to="/" >Go back</Link></div>
//            </stack>
//         </div>
//     )
// }



// export default Blogs


