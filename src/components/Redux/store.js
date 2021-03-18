import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import siteBarReducer from "./siteBar_reducer";
import headerReducer from "./header_reducer";



export let store = {
    _callSubscriber() {
        console.log("state chenged")
    },
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'ti pesik', likeCount: '15'},
                {id: 2, message: '9 pokushal', likeCount: '20'},
                {id: 3, message: '4issti vilkoy', likeCount: '10'},
                {id: 4, message: '4issti loshlkoi', likeCount: '30'}
            ], //
            imgAvatar: "https://sun9-39.userapi.com/impf/c840334/v840334011/1d03c/Rf6GaaUJSIE.jpg?size=410x410&quality=96&sign=9f912c64d0e612125a4dbac898b4834a&type=album",//
            imgMain: "https://i.ytimg.com/vi/INiGRHRElmQ/maxresdefault.jpg",
            postText: "hochy v voity"
        },
        headerPage: { //
            imgHeader: "https://2.allegroimg.com/s1024/031c65/9b72fbd6480892337b3bad6e5802"
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Lera"},
                {id: 2, name: "Pesya"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Dima"},
                {id: 5, name: "Tema"},
                {id: 6, name: "SinDiadiToli"},
            ],
            messageData: [
                {id: 1, message: "Ti bukaska"},
                {id: 2, message: "Privet Dimon"},
                {id: 3, message: "Na zavod bistro"},
                {id: 4, message: "Dima"},
                {id: 5, message: "Tema"}
            ],
            newMessageText: "Hi bukaska",
        },
        siteBar: [{
            name: "Pesia",
            img: "https://sun9-6.userapi.com/impg/ur9s1BRcMQQMCT8X5VNSvqfV7-gd2fTQL5g2qA/VLm2R1DMWsE.jpg?size=1216x1622&quality=96&sign=3e2d40489c6793a5e338502a8dd8ff57&type=album"
        },
            {
                name: "Pon4ik",
                img: "https://sun9-73.userapi.com/impg/NNPXORAy5V09_i07BPcNpXFFRBmvsdu0cVtnQA/aKGfzXLSueE.jpg?size=750x1624&quality=96&sign=94d529359312e3149afce75157b968b7&type=album"
            },
            {
                name: "Archik",
                img: "https://sun9-26.userapi.com/impg/5vqViK1FJLl_8r4yC4ytCM3qMCypJLLQAVynPw/j_rUJn3Or9o.jpg?size=750x1624&quality=96&sign=2879a06f59cd95d0e1fdf1889be97c54&type=album"
            },
            {
                name: "Indi",
                img: "https://sun9-73.userapi.com/impg/NNPXORAy5V09_i07BPcNpXFFRBmvsdu0cVtnQA/aKGfzXLSueE.jpg?size=750x1624&quality=96&sign=94d529359312e3149afce75157b968b7&type=album"
            },
            {
                name: "Maks",
                img: "https://sun9-73.userapi.com/impg/NNPXORAy5V09_i07BPcNpXFFRBmvsdu0cVtnQA/aKGfzXLSueE.jpg?size=750x1624&quality=96&sign=94d529359312e3149afce75157b968b7&type=album"
            },
            {
                name: "Fedor",
                img: "https://sun9-73.userapi.com/impg/NNPXORAy5V09_i07BPcNpXFFRBmvsdu0cVtnQA/aKGfzXLSueE.jpg?size=750x1624&quality=96&sign=94d529359312e3149afce75157b968b7&type=album"
            }]
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state
    },
    dispatch(action){
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.siteBar = siteBarReducer(this._state.siteBar, action);
       this._state.headerPage = headerReducer(this._state.headerPage, action)
       this._callSubscriber()
    }

}

window.store = store;







