import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";
import {render, screen} from "@testing-library/react";
import App from "../../App";
let state = {
    postsData: [
        {id: 1, message: 'test', likeCount: '15', flagchange: false, editpostText: ""},
        {id: 2, message: 'test', likeCount: '20', flagchange: false, editpostText: ""},
        {id: 3, message: '4issti vilkoy', likeCount: '10', flagchange: false, editpostText: ""},
        {id: 4, message: '4issti loshlkoi', likeCount: '30', flagchange: false, editpostText: ""}
    ]
}
test('lenght of newPost should be incremented', () => {
    // 1. Test DATA
    let action = addPostActionCreator("it-kamasutra.com")
    //2. Action
    let newState = profileReducer(state,action)
    //3. Expectation
    expect(newState.postsData.length).toBe(5)
});

test('message of new post should be correct', () => {
    // 1. Test DATA
    let action = addPostActionCreator("it-kamasutra.com")

    //2. Action
    let newState = profileReducer(state,action)
    //3. Expectation
    expect(newState.postsData[4].message).toBe("it-kamasutra.com")
});

test('after delet length of message should be decrement', () => {
    // 1. Test DATA
    let action = deletePost(1)

    //2. Action
    let newState = profileReducer(state,action)
    //3. Expectation
    expect(newState.postsData.length).toBe(3)

});

test('after delet length  should t be decrement if id incorrect', () => {
    // 1. Test DATA
    let action = deletePost(100)

    //2. Action
    let newState = profileReducer(state,action)
    //3. Expectation
    expect(newState.postsData.length).toBe(4)
});

