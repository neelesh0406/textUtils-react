import React from 'react'

export default function Alert(props) {
    return (
        //if props.alert is true, then only the next statement will be executed
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong className="text-capitalize">{props.alert.type}</strong> : {props.alert.message}
        </div>
    )
}
