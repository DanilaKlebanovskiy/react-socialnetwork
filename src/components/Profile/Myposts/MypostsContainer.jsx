import {
    addPostActionCreator,
    delAllPostActionCreator,
    editPostActionCreator,
    onPostChangeActionCreator
} from "../../Redux/profile_reducer";
import Myposts from "./Myposts";
import StoreContext from "../../../store-context";



const MypostsContainer = () => {


    return <StoreContext.Consumer>
        {store => {
            let addPost = () => {
                let action = addPostActionCreator()
                store.dispatch(action);
            }

            let onPostChange = (text) => {
                let action = onPostChangeActionCreator(text);
                store.dispatch(action)
            };

            let delAllPost = () => {
                let action = delAllPostActionCreator()
                store.dispatch(action)
            }

            let editPost = (idPost) => {
                let action = editPostActionCreator(idPost)
                store.dispatch(action);
            }
            return <Myposts updateNewPostText={onPostChange}
                            addPost={addPost}
                            delAllPost={delAllPost}
                            postsData={store.getState().profilePage.postsData}
                            newPostText={store.getState().profilePage.postText}
                            editPost={editPost}/>
        }
        }
    </StoreContext.Consumer>
}
export default MypostsContainer
