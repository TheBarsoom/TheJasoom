import { Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "../GlobalStyle";

import Layout from "./Layout";
import { AdminLogin, Dashboard, EmailVerify, Home, Login, Register,Error } from "../components";



const MainRoute = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path='admin/login' element={<AdminLogin/>}  />
            <Route path='register' element={<Register/>}  />
            <Route path='register/email-verify' element={<EmailVerify/>}  />
            <Route path='login' element={<Login/>}  />
            <Route path='article/:currentPage?' element={<Home/>}  />
            <Route path='artical/details/:slug' element={<Home/>}  />
            <Route path='artical/category/:categorySlug/:currentPage?' element={<Home/>}  />
            <Route path='artical/tag/:tagSlug/:currentPage?' element={<Home/>}  />
            <Route path='artical/search/:searchValue' element={<Home/>}  />

            <ProtectRoute path="/dashborad" element={<Dashborad/>}  />

            <Route path="dashborad/all-article/:currentPage?" element={<Dashboard/>}  />
            <Route path="dashborad/article-add" element={<Dashborad/>}  />
            <Route path="dashborad/article/edit/:articleSlug" element={<Dashborad/>}  />

            <Route path="dashborad/all-category/:currentPage?" element={<Dashborad/>}  />
            <Route path="dashborad/add-category" element={<Dashborad/>}  />
            <Route path="dashborad/category/edit/:cateSlug" element={<Dashborad/>}  />

            <Route path="dashborad/all-tag/:currentPage?" element={<Dashborad/>}  />
            <Route path="dashborad/add-tag" element={<Dashborad/>}  />
            <Route path="dashborad/tag/edit/:tagSlug" element={<Dashborad/>}  />

            <Route path="dashborad/all-sub-admin/:currentPage?" element={<Dashborad/>}  />

            <Route path="dashborad/all-user/:currentPage?" element={<Dashborad/>}  />

            <Route path="dashborad/sub-admin-profile/:adminId" element={<Dashborad/>}  />

            <Route path="dashborad/comments/:currentPage?" element={<Dashborad/>}  />


          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
