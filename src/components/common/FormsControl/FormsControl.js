import React from "react";
import s from "./Formcontrol.module.css"


const FormControl = ({input, meta, ...props}) =>{
    const showError = meta.error && meta.touched && meta.active
    return (
        <div className={showError ? s.formControl + " " + s.error : s.formControl }>
            {props.children}
            {showError && <span>{meta.error}</span>}
        </div>
    )

}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )

}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )

}