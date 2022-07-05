import { useAuth0 } from "@auth0/auth0-react";


function LogoutButton () {
   
    const {logout} = useAuth0();

    return (
        <button style={{height:"50px",width:"80px", fontSize:"20px",cursor:"pointer"}} onClick={()=> logout({returnTo: window.location.origin})}>Logout</button>
    )
}


export default LogoutButton;