
import {addPostActionCreator, onPostChangeActionCreator} from "../../Redux/profile_reducer";
import Myposts from "./Myposts";


const MypostsContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action)
    };
    return <Myposts updateNewPostText = {onPostChange}
                    addPost = {addPost}
                    posts={props.getState().postsData}/> //param

}
export default MypostsContainer
