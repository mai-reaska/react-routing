import {useOutletContext} from "react-router-dom";
export default function HostVansPrice(){
    const currentVan = useOutletContext()
    return(
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}