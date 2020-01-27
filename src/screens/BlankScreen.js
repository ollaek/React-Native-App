import { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const Blank = () => {

    const { TryLocalSignIn } = useContext(AuthContext);

    useEffect(() => {
        TryLocalSignIn();
    },[]);

    return null;
};

export default Blank;