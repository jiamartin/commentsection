import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments } from '../action/commentActions';

class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments();
      }

      render() {
        let comments_items = this.props.comments.data
        var recursive = [];
    
        if (comments_items != null) {
          let items = Object.entries(comments_items);
          recursive = recursive_comments(items);
        }
    
        function recursive_comments (items) {
    
          var commentsComponent = [];
          while (items.length > 0) {
            var [key, item] = items.shift();

          let sub_items = Object.entries(item.sub_comment);
    
          commentsComponent.push(
              <div key={key} className="task " >
                <h4> {item.comment_desc} </h4>
                <small>Comment by: {item.comment_by}</small> 
                <hr></hr>
              </div>,
               recursive_comments (sub_items)
            );
    
          }
    
          return commentsComponent;
        }
        
        return (
        
          <div>
            {recursive}
          </div>
    
        )
      }
    }

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.object,
    // newComment: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.item,
//   newComment: state.comments.items
});
    
export default connect(mapStateToProps, {fetchComments})(Comments);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       comments: []
    //     }
    //   }

    //   componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/api/get_comments')
    //       .then(res => {
    //         this.setState({ comments: res.data })
    //       })
    
//     componentWillMount() {
//         this.props.fetchComments();
//       }

//       componentWillReceiveProps(nextProps) {
//         if (nextProps.newComment) {
//           this.props.comments.unshift(nextProps.newComment);
//         }
//     }

//       render() {

//         const commentItems = this.props.comments.map(comment => (
//           <div key={comment.id} className="task form-control">
//               <h3> {comment.comment_by}  <FaTrash style={{color:'red', cursor:'pointer'}}
//               /> </h3>
//               <p> {comment.comment_desc}</p>
//               <small className="text-primary">{comment.created_at}</small>
//           </div>
//         ));
//         return (
//             <div>
//               <h1>Comments</h1>
//               {commentItems}
//             </div>

//           );
//       }
//     }

// Comments.propTypes = {
//     fetchComments: PropTypes.func.isRequired,
//     comments: PropTypes.array.isRequired,
//     newComment: PropTypes.array.isRequired
// };

// const mapStateToProps = state => ({
//   comments: state.comments.items,
//   newComment: state.comments.items
// });
    
// export default connect(mapStateToProps, {fetchComments})(Comments);


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