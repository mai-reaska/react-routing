import { Navigate } from "react-router-dom"

function ProtectRoute({child, user}){
    if(!user){
        return <Navigate to='/' />
    }
    return child
}
export default ProtectRoute