import { createContext } from "react";

const userContext = createContext({
    userName: "Default Name",
    userAge: "Default Age",
})

export default userContext;