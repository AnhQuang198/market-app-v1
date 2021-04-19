import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Register from "../pages/Auth/Register";
import Error404 from "../pages/Utils/Error404";
import Error500 from "../pages/Utils/Error500";
import Home from "../pages/doashboard/Home";

const authRoutes = [
    { path: "/" , component: Home}
];

const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/forgot-password", component: ForgetPassword },
    { path: "/register", component: Register },
    { path: "/pages-404", component: Error404 },
    { path: "/pages-500", component: Error500 }
];

export { authRoutes, publicRoutes };