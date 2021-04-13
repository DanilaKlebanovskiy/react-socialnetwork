import {
    addEditPostActionCreator,
    addPostActionCreator,
    delAllPostActionCreator,
    editPostActionCreator, onChangeEditActionCreator,
    onPostChangeActionCreator
}
    from "../../Redux/profile_reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            let action = addPostActionCreator(text);
            dispatch(action)
        },

        delAllPost: () => {
            let action = delAllPostActionCreator()
            dispatch(action)
        },
        editPost: (idPost) => {
            let action = editPostActionCreator(idPost)
            dispatch(action);
        },
        onChangeEdit : (text,idPost) => {
            let action = onChangeEditActionCreator(text,idPost)
            dispatch(action)
        },
        addEditPost: (idPost) => {
            let action = addEditPostActionCreator(idPost)
            dispatch(action)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.postText,
    }
}


const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MypostsContainer
