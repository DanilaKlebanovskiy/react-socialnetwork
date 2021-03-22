import {
    addPostActionCreator,
    delAllPostActionCreator,
    editPostActionCreator,
    onPostChangeActionCreator
}
from "../../Redux/profile_reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action)
        },
        delAllPost: () => {
            let action = delAllPostActionCreator()
            dispatch(action)
        },
        editPost: (idPost) => {
            let action = editPostActionCreator(idPost)
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.postText
    }
}


const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MypostsContainer
