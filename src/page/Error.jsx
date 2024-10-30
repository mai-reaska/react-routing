import { useRouteError } from "react-router-dom"
function Error() {
    const err = useRouteError
    return (
        <>
            <h1>Erro{err.message}</h1>
        </>
    )
}
export default Error