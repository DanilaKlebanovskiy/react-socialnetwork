import Contacts from "../Contacts/contacts";

const Info = (props) => {
    return <div>
        {props.owner && <button onClick={props.activeEditMode}>edit</button>}
        <div>{props.profile.profile.fullName}</div>
        <div>Обо мне: {props.profile.profile.aboutMe}</div>
        <div>Ищу работу: {!props.profile.profile.lookingForAJob ? <div>nea</div> : <div>Da</div>}</div>
        <div>My prof skills: {props.profile.profile.lookingForAJobDescription}</div>
        <div>Contacts: {Object.keys(props.profile.profile.contacts).map(key =>
            <Contacts key={key} ContactTitle={key} ContactValue={props.profile.profile.contacts[key]}/>
        )}</div>
    </div>

}

export default Info