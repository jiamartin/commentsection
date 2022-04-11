import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa'
import { connect } from 'react-redux';
import { fetchComments } from '../action/commentActions';

class Comments extends Component {
    componentWillMount() {
        this.props.fetchComments();
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.newComment) {
          this.props.comments.unshift(nextProps.newComment);

          
        }
    }

      render() {
        const commentItems = this.props.comments.map(comment => (
          <div key={comment.id} className="task form-control">
              <h3 >  {comment.comment_desc} <FaTrash style={{color:'red', cursor:'pointer'}}
              /> </h3>
              <small >{comment.created_at}</small><br></br>
              <small className="text-primary">Commented by: {comment.comment_by}</small>
          </div>
        ));
        return (
            <div>
              <h1>Comments</h1>
              {commentItems}
            </div>
          );
      }
    }

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    newComment: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.items,
  newComment: state.comments.items
});
    
export default connect(mapStateToProps, {fetchComments})(Comments);


// const Comments = ({ fetchComments, onDelete }) => {
//     return (
//       <>
//         {comments?.map((comment) => (
//           <Comment key={comment.id} comment={comment} onDelete={onDelete}/>
//         ))}
    
//       </>
//     )
//   }

// const Comments = ({comment: {comments,loading},fetchComments})=> {
//     useEffect(() => {
//         fetchComments();
//     }, [fetchComments])

//     return loading ?
//             (<div className="progress">
//                   <div className="indeterminate"></div>
//             </div>)
//             :
//             (
//                 <div>
//                 { comments && comments.length ?
//                 comments.map((comment) => (
//                     <Comment key={comment.id} comment={comment}/>
//                )) : null}
//                 </div>

//         )

// const Comments = ({ comments, onDelete }) => {

    // useEffect(() => {
    //     fetchComments();
    // }, [fetchComments])
//     return (
//       <>
//         {comments?.map((comment) => (
//           <Comment key={comment.id} comment={comment} onDelete={onDelete}/>
//         ))}
    
//       </>
//     )
//   }

// }
// Comments.propTypes = {
//     comment: PropTypes.object.isRequired,
//     fetchComments: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => ({
//     comment: state.comments.item
// })





// export default connect(mapStateToProps, { fetchComments })(Comments);

// const Comments = ({ comments, onDelete }) => {
//     return (
//       <>
//         {comments?.map((comment) => (
//           <Comment key={comment.id} comment={comment} onDelete={onDelete}/>
//         ))}
    
//       </>
//     )
//   }