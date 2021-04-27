import React from "react";
import Loading from "../components/Users/Loading";

export const Suspense = (Component) => {
    return (props) => {
    return <React.Suspense fallback={<Loading/>}>
        <Component/>
    </React.Suspense>
    }
}