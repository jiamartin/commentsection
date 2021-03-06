
import Header from './components/Header'
import Comments from './components/Comments'
import AddComment from './components/AddComment'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <div className="container">
        <Header />
        <Comments />
        <AddComment />
        </div>
    </Provider>
  );
}

export default App;

//   const [comments, setComments] = useState([])

// useEffect(() => {
//     store.dispatch(fetchComments())
// }, [])

//     getComments()
//   }, [])

  // Fetch Tasks
//   const fetchComments = async () => {
//     axios.get(`http://127.0.0.1:8000/api/get_comments`).then(res => {
//       if (res.status === 200) {
//         setComments(res.data.comments)
//       }
//     });

  //Add Comment
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

//   }

  //Delete Comment
//   const deleteComment = async (id) => {
//     axios.delete(`http://127.0.0.1:8000/api/add_comments/`, id).then(res => {
//       if (res.status === 200) {
          
//     }
//   });
//   }
