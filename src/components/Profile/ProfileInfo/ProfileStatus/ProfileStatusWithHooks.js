import React, {useEffect, useState} from 'react'


export const ProfileStatusWithHooks = (props) => {
    let [editmode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return <>
        {editmode ?
            <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMode}
                value={status}/></div> :
            <div><span onDoubleClick={activeEditMode}>{props.status || "net statusa"}</span></div>}
    </>

}
