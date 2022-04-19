import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComments } from '../action/commentActions';

const AddComment = ({ addComments }) => {

    const [formData, onAdd] = useState(
        {
            comment_by: "",
            comment_desc: ""
        },
        []
    );
    const { comment_by, comment_desc} = formData;

    const onChange = e =>
    onAdd({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = (e) => {
        e.preventDefault()

        if(!comment_desc) {
            alert('Please add a Comment')
        }
        addComments(formData);
        onAdd({ comment_by: "", comment_desc: "" });

    }
    
    
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
           <label htmlFor="">Commentor's Name</label>
            <input name="comment_by" 
            type="text" 
            placeholder="Type your Name" 
            value={comment_by}
            onChange={e => onChange(e)}/>
       </div>
       <div className="form-control">
           <label htmlFor="">Add Comment</label>
            <input name="comment_desc" type="text"  placeholder="Write a comment..." 
            value={comment_desc} onChange={e => onChange(e) }/>
       </div>
       <div className="form-control">
            <input type="submit" value="Send" className="btn"/>
       </div>
    </form >
  )
}


AddComment.propTypes = {
    addComments: PropTypes.func.isRequired
};

export default connect(null, { addComments })(AddComment);


// class AddComment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comment_by: "",
//       comment_desc: ""
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const formData = {
//       comment_by: this.state.comment_by,
//       comment_desc: this.state.comment_desc
//     };

//     this.props.addComments(formData);
//   }

//   render() {
//     return (

//       <div>
//         <form className="add-form" onSubmit={this.onSubmit}>
//         <div className="form-control">
//            <label htmlFor="">Commentor's Name</label>
//             <input type="text" name="comment_by" onChange={this.onChange} value={this.state.comment_by} />
//        </div>
//        <div className="form-control">
//            <label htmlFor="">Add Comment</label>
//             <input name="comment_desc" type="text" placeholder="Write a comment..." 
//             value={this.state.comment_desc}  onChange={this.onChange}/>
//        </div>
//        <div className="form-control">
//             <input type="submit" value="Send" className="btn"/>
//        </div>
//     </form >
//       </div>
//     );
//   }
// }

// AddComment.propTypes = {
//     addComments: PropTypes.func.isRequired
// };

// export default connect(null, { addComments })(AddComment);




//////////prev_form
// return (
//     <form className="add-form" onSubmit={onSubmit}>
//         <div className="form-control">
//            <label htmlFor="">Commentor's Name</label>
//             <input name="comment_by" type="text" placeholder="Type your Name" 
//              value={comment_by} onChange={(e) => setName(e.target.value) }/>
//        </div>
//        <div className="form-control">
//            <label htmlFor="">Add Comment</label>
//             <input name="comment_desc" type="text"  placeholder="Write a comment..." 
//             value={comment_desc} onChange={(e) => setComment(e.target.value) }/>
//        </div>
//        <div className="form-control">
//             <input type="submit" value="Send" className="btn"/>
//        </div>
//     </form >
//   )
// }
