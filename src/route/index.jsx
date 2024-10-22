import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "../page/Home.jsx"
import Error from "../component/Error.jsx"
import ShareLayout from "../layout/ShareLayout.jsx"
import Team from "../component/Team.jsx"
import About from "../page/About.jsx"
import Form from "../component/Form.jsx"
import StudentList from "../page/StudentList.jsx"
import Product from "../product/Product.jsx"
import ProductDetail from "../product/ProductDetail.jsx"
import Login from "../page/Login.jsx"
import Dashboard from "../page/Dashboard.jsx"
import ProtectRoute from "../component/ProtectRoute.jsx"
function route() {
    const [user, setUser] = useState(null)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShareLayout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Form />} />
                    <Route path="/student" element={<StudentList />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectRoute user={user}>
                                <Dashboard user={user} />
                            </ProtectRoute>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default route