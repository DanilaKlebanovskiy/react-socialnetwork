
import {addPostActionCreator, delAllPostActionCreator, onPostChangeActionCreator} from "../../Redux/profile_reducer";
import Myposts from "./Myposts";


const MypostsContainer = (props) => {
    let state =props.store.getState();
    debugger;
    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action)
    };

    let delAllPost = () => {
        let action = delAllPostActionCreator()
        props.store.dispatch(action)
    }
    return <Myposts updateNewPostText = {onPostChange}
                    addPost = {addPost}
                    delAllPost = {delAllPost}
                    postsData={state.profilePage.postsData} newPostText={state.profilePage.postText}/>

}
export default MypostsContainer
