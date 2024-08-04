import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage/WebsitePage/LandingPage';
import DriverAgreement from './component/DriverPolicy/DriverAgreement';
import UserPolicy from './component/UserPolicy/UserPolicy';
import FaqUser from './component/FaqUser/FaqUser';
import FaqDriver from './component/FaqDriver/FaqDriver';
import Blog from './component/Blogs/Blog/Blog';
import BlogOne from './component/Blogs/BlogOne/BlogOne';
import BlogTwo from './component/Blogs/BlogTwo/Blogtwo';
import BlogThree from './component/Blogs/BlogThree/BlogThree';
import BlogFour from './component/Blogs/BlogFour/BlogFour';
import AgriBlogLandingPage from './component/AgriBlogs/AgriBlogLandingPage';
import AgriBlogPosts from './component/AgriBlogs/AgriBlogPosts';
import AdminPanel from './component/AdminPanel/AdminPanel';
import SignIn from './component/BlogSign/SignIn';
import SignUp from './component/BlogSign/SignUp';
import EditBlog from './component/AdminPanel/EditBlog ';
import AgrilogizAdmin from './component/AgriAdmin/AgrilogizAdmin';
import SignSelection from './component/User/DriverSign/SignSelection';
import DriverSignUp from './component/User/DriverSign/DriverSignUp';
import DriverLogin from './component/User/DriverSign/DriverLogin';
import DriverForgotPassword from './component/User/DriverSign/DriverForgotPassword';
import DriverResetPassword from './component/User/DriverSign/DriverResetPassword';
import VerifyMobileNumber from './component/User/DriverSign/VerifyMobileNumber';
import VerifyEmailAddress from './component/User/DriverSign/VerifyEmailAddress';
import VerifyMobileNumberSuccesfull from './component/User/DriverSign/VerifyMobileNumberSuccesfull';
import DriverSignUpWithDetail from './component/User/DriverSign/DriverSignUpWithDetail';

const App = () => {
    return (
        <>
            {/* <LandingPage /> */}
            {/* <DriverAgreement /> */}
            {/* <UserPolicy /> */}
            {/* <FaqUser /> */}
            {/* <FaqDriver /> */}
            {/* <Blog /> */}
            {/* <BlogOne /> */}
            {/* <BlogTwo /> */}
            {/* <BlogThree /> */}
            {/* <BlogFour /> */}
            {/* <AgriBlogLandingPage /> */}
            {/* <AgriBlogPosts /> */}
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/DriverAgreement" element={<DriverAgreement />} />
                <Route path="/UserPolicy" element={<UserPolicy />} />
                <Route path="/FaqUser" element={<FaqUser />} />
                <Route path="/FaqDriver" element={<FaqDriver />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/BlogOne" element={<BlogOne />} />
                <Route path="/BlogTwo" element={<BlogTwo />} />
                <Route path="/BlogThree" element={<BlogThree />} />
                <Route path="/BlogFour" element={<BlogFour />} />
                {/* driver pages */}
                <Route path="/signselection" element={<SignSelection />} />
                <Route path="/driversignup" element={<DriverSignUp />} />
                <Route path="/driverlogin" element={<DriverLogin />} />
                <Route
                    path="/driverforgotpassword"
                    element={<DriverForgotPassword />}
                />
                <Route
                    path="/driverresetpassword"
                    element={<DriverResetPassword />}
                />
                <Route path="/verifynumber" element={<VerifyMobileNumber />} />
                <Route
                    path="/verifynumbersuccessful"
                    element={<VerifyMobileNumberSuccesfull />}
                />
                <Route path="/verifyemail" element={<VerifyEmailAddress />} />
                <Route path="/driversignupwithdetail" element={<DriverSignUpWithDetail />} />


                {/* driver pages end */}

                <Route
                    exact
                    path="/AgriBlogPosts"
                    element={<AgriBlogLandingPage />}
                />
                <Route path="/AgriBlogPosts/:id" element={<AgriBlogPosts />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/edit/:id" element={<EditBlog />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/AgriAdmin" element={<AgrilogizAdmin />} />
            </Routes>
            {/* <RouterProvider router={router} /> */}
        </>
    );
};

export default App;
