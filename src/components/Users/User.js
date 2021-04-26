import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPicture from "../../assets/users-picture.jpg";

let User = ({user,followingInProgress,unfollowThunk,followThunk}) =>{
   return <div className={s.wrapper}>
       <div>
           <NavLink to={"/profile/" + user.id}><img
               src={user.photos.large === null ? userPicture : user.photos.large}/></NavLink>
           {user.followed ?
               <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                   unfollowThunk(user.id)
               }}>UnFollow</button> :
               <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                   followThunk(user.id)
               }}>Follow </button>}

       </div>
       <div className={s.grid}>
           <div>
               <div>
                   {user.name}
               </div>
               <div>
                   {user.status}
               </div>
           </div>
           <div>
               <div>{"user.location.country"}</div>
               <div>{"user.location.city"}</div>
           </div>
       </div>
   </div>
}

export default User