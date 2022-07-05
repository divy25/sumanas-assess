import { useAuth0 } from "@auth0/auth0-react";
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {saveUser} from "../redux/login/action"

function UserProfile () {
   
    
    const {isLoading,isAuthenticated,user} = useAuth0();

    const loggedInUser = useSelector((state) => state.user)

    const dispatch = useDispatch()
    useEffect(
        () => {
                if(isAuthenticated){
                      dispatch(saveUser(user)) ;
                }
        },[isAuthenticated]
       )

    if(isLoading){
        return  <div>Loading!</div>
    }

    return (
        isAuthenticated && (
            <div style={{ alignItems:"center" , justifyContent:"center"}}>
                <img src={loggedInUser?.picture} alt={loggedInUser?.name} />
                 <h2>{loggedInUser?.name}</h2>
                  <p>{loggedInUser?.email}</p>
            </div>
        )
    )
}


export default UserProfile;