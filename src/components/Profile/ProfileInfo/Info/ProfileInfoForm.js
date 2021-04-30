import React from "react";
import Contacts from "../Contacts/contacts";
import {createField, Input} from "../../../common/FormsControl/FormsControl";
import {required} from "../../../../utilits/validators";
import {reduxForm} from "redux-form";

const ProfileForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
             <button onClick={props.activeEditMode}>save</button>}
            <div>Full Name: {createField("FullName","fullName",[],Input)}</div>
            <div>Обо мне: {props.profile.profile.aboutMe}</div>
            <div>Ищу работу: {!props.profile.profile.lookingForAJob ? <div>nea</div> : <div>Da</div>}</div>
            <div>My prof skills: {props.profile.profile.lookingForAJobDescription}</div>
            <div>Contacts: {Object.keys(props.profile.profile.contacts).map(key =>
                <Contacts key={key} ContactTitle={key} ContactValue={props.profile.profile.contacts[key]}/>
            )}</div>
        </form>

    </div>
}
const ProfileInfoFormReduForm = reduxForm({form: 'editProfile'})(ProfileForm)
export default ProfileInfoFormReduForm