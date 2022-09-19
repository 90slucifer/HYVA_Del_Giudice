import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";
export const CartContaienr = () => {
    const value = useContext(ThemeContext);

    return (
        <div>{value.texto}</div>
    )
}