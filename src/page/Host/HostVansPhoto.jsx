import {useOutletContext} from "react-router-dom";
export default function HostVansPhoto(){
    const currenVans = useOutletContext()
    return(
       <img src={currenVans.imageUrl} alt={currenVans.name} className="host-van-detail-image"/>
    )
}