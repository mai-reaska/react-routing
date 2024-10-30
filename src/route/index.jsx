import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import "../server"
import Layout from "../layout/Layout"
import Home from "../views/Home"
import About from "../views/About"
import NotFound from "../views/NotFound"
import Vans from "../page/Vans/VanList"
import VanDetail from "../page/Vans/VanDetail"
import Dashboard from "../page/Host/Dashboard"
import Income from "../page/Host/Incom"
import Review from "../page/Host/Reviews"
import HostLayout from "../layout/HostLayout"
import HostVans from "../page/Host/HostVans"
import HostVansDetail from "../page/Host/HostVansDetail"
import HostVansInfo from "../page/Host/HostVansInfo"
import HostsVansPhoto from "../page/Host/HostVansPhoto"
import HostsVansPrice from "../page/Host/HostVansPrice"
function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/vans">
                        <Route index element={<Vans />} />
                        <Route path="/vans/:id" element={<VanDetail />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Review />} />
                        {/*<Route path="vans" element={<Outlet />}>*/}
                        {/*    <Route index element={<HostVans />} />*/}
                        {/*    <Route path=":id" element={<HostVansDetail />} />*/}
                        {/*</Route>*/}
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVansDetail />}>
                            <Route index element={<HostVansInfo />} />
                            <Route path="pricing" element={<HostsVansPrice />} />
                            <Route path="photos" element={<HostsVansPhoto />} />
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter >
    )
}
export default Routing