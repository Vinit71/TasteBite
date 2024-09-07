import { useRouteError } from "react-router-dom";
const CustomRouteError = () =>{
    const custError = useRouteError();
    return(
        <>
            <h1>Opps!!</h1>
            <h3>There is a problem</h3>
            <h3>{custError.status}</h3>
        </>
    )
}

export default CustomRouteError;