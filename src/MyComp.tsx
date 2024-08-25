import React from "react";
import { useAppSelector } from "./redux/hooks";

const MyComp: React.FC = () => {
    const counter = useAppSelector(s => s.counter);
    return (<h1>My Component: {counter}</h1>)
}

export default MyComp;