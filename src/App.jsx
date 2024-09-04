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
import VerifyEmailAddressSuccesfull from './component/User/DriverSign/VerifyEmailAddressSucessfull';
import DriverSignUpWithDetail from './component/User/DriverSign/DriverSignUpWithDetail';
import DriverSignUpWithDetailTwo from './component/User/DriverSign/DriverSignUpWithDetailTwo';
import DriverSignUpWithDetailThree from './component/User/DriverSign/DriverSignUpWithDetailThree';
import ProfileCreate from './component/User/DriverSign/ProfileCreate';
import UserSignSelection from './component/User/UserSign/UserSignSelection';
import UserSignUp from './component/User/UserSign/UserSignUp';
import UserLogin from './component/User/UserSign/UserLogin';
import UserForgotPassword from './component/User/UserSign/UserForgotPassword';
import UserResetPassword from './component/User/UserSign/UserResetPassword';
import UserVerifyMobileNumber from './component/User/UserSign/UserVerifyMobileNumber';
import UserVerifyEmailAddress from './component/User/UserSign/UserVerifyEmailAddress';
import UserVerifyMobileNumberSuccesfull from './component/User/UserSign/UserVerifyMobileNumberSuccessfull';
import UserVerifyEmailAddressSuccesfull from './component/User/UserSign/UserVerifyEmailAddressSuccesfull';
import UserCreateProfile from './component/User/UserSign/UserCreateProfile';
import AdminDashboard from './component/AddminDashboard/Dashboard/AdminDashBoard';
import AdminDashboardCustomer from './component/AddminDashboard/Customers/AdminDashBoardCustomer';
import AdminDashboardDriver from './component/AddminDashboard/Drivers/AdmindashboardDrivers';
import AdminDashboardPayments from './component/AddminDashboard/Payments/AdminDashboardPayments';
import UserDashboard from './component/UserDashboard/UserDashboard';
import DeliverOption from './component/UserDashboard/DeliveryPages/DeliveryOption';
import DeliveryOptionTwo from './component/UserDashboard/DeliveryPageTwo/DriveryOptionTwo';
import DeliveryPageThree from './component/UserDashboard/DeliveryPageThree/DeliveryPageThree';
import AvaliableDriver from './component/UserDashboard/AvaliableDriver/AvaliableDriver';
import OrderSummary from './component/UserDashboard/OrderSummary/Ordersummary';
import DriverContact from './component/UserDashboard/DriverContact/DriverContact';
import CallAndText from './component/UserDashboard/CallAndText/CallAndTest';
import DriverFound from './component/UserDashboard/DriverFound/DriverFound';
import UserDriverArrived from './component/UserDashboard/UserDriverArrrived/UserDriverArrived';
import DriverDashboard from './component/DriverDashboard/DriverDashboard';
import DriverAvaliableJob from './component/DriverDashboard/DriverAvaliableJob/DriverAvaliableJob';
import DriverDeliveryDetail from './component/DriverDashboard/DriverDeliveryDetail/DriverDeliveryDetail';
import DriverDeliveryLocation from './component/DriverDashboard/DriverDeliveryLocation/DriverDeliveryLocation';
import DriverDeliveryStatus from './component/DriverDashboard/DriverDeliveryStatus/DriverDeliveryStatus';
import DriverDeliveryStatusTwo from './component/DriverDashboard/DriverDeliverStatusTwo/DriverDeliveryStatusTwo';
import DriverNewDelivery from './component/DriverDashboard/DriverNewDelivery/DriverNewDelivery';

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
                {/* Landing page */}
                <Route exact path="/" element={<LandingPage />} />
                {/* Landing page End */}
                <Route path="/DriverAgreement" element={<DriverAgreement />} />
                <Route path="/UserPolicy" element={<UserPolicy />} />
                <Route path="/FaqUser" element={<FaqUser />} />
                <Route path="/FaqDriver" element={<FaqDriver />} />
                {/* blogs start */}
                <Route path="/Blog" element={<Blog />} />
                <Route path="/BlogOne" element={<BlogOne />} />
                <Route path="/BlogTwo" element={<BlogTwo />} />
                <Route path="/BlogThree" element={<BlogThree />} />
                <Route path="/BlogFour" element={<BlogFour />} />
                {/* blogs ends */}
                {/* these where the  Created  Blog Landing and Single View Screen for all content. */}
                <Route
                    exact
                    path="/AgriBlogPosts"
                    element={<AgriBlogLandingPage />}
                />
                {/* these where the  Created  Blog Landing and Single View Screen for all content is navigating to. */}
                <Route path="/AgriBlogPosts/:id" element={<AgriBlogPosts />} />
                {/* these where you can edit and delete blogs */}
                {/* <Route path="/admin" element={<AdminPanel />} />*/}
                {/* these is the main place to edit your content blogs*/}
                {/* <Route path="/edit/:id" element={<EditBlog />} />  */}

                {/* driver sign pages */}

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
                <Route
                    path="/verifyemailsuccessful"
                    element={<VerifyEmailAddressSuccesfull />}
                />
                <Route path="/verifyemail" element={<VerifyEmailAddress />} />
                <Route
                    path="/driversignupwithdetail"
                    element={<DriverSignUpWithDetail />}
                />
                <Route
                    path="/driversignupwithdetailtwo"
                    element={<DriverSignUpWithDetailTwo />}
                />
                <Route
                    path="/driversignupwithdetailthree"
                    element={<DriverSignUpWithDetailThree />}
                />
                <Route path="/profilecreate" element={<ProfileCreate />} />

                {/* driver sign pages end */}

                {/* user sign pages */}
                <Route
                    path="/usersignselection"
                    element={<UserSignSelection />}
                />
                <Route path="/usersignup" element={<UserSignUp />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route
                    path="/userforgotpassword"
                    element={<UserForgotPassword />}
                />
                <Route
                    path="/userresetpassword"
                    element={<UserResetPassword />}
                />
                    <Route
                        path="/userverifyemail"
                        element={<UserVerifyEmailAddress />}
                    />
                <Route
                    path="/userverifynumber"
                    element={<UserVerifyMobileNumber />}
                />
                <Route
                    path="/userverifynumbersuccessfull"
                    element={<UserVerifyMobileNumberSuccesfull />}
                />
                <Route
                    path="/userverifyemailsuccessfull"
                    element={<UserVerifyEmailAddressSuccesfull />}
                />
                <Route
                    path="/usercreateprofile"
                    element={<UserCreateProfile />}
                />

                {/*user sign pages end */}

                {/* Admin Dashboard start */}
                <Route path="/admindashboard" element={<AdminDashboard />} />
                {/* customer */}
                <Route
                    path="/admindashboardcustomer"
                    element={<AdminDashboardCustomer />}
                />

                {/* Driver */}
                <Route
                    path="/admindashboarddriver"
                    element={<AdminDashboardDriver />}
                />
                {/* Payment */}
                <Route
                    path="/admindashboardpayment"
                    element={<AdminDashboardPayments />}
                />

                {/* Admin Dashboard End */}

                {/* user dashboard */}

                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/deliveryoption" element={<DeliverOption />} />
                <Route
                    path="/deliveryoptiontwo"
                    element={<DeliveryOptionTwo />}
                />
                <Route
                    path="/deliverypagethree"
                    element={<DeliveryPageThree />}
                />

                {/* Avaliable Driver */}
                <Route path="/avaliabledriver" element={<AvaliableDriver />} />

                {/* Order summary */}
                <Route path="/ordersummary" element={<OrderSummary />} />

                {/* Driver contact */}
                <Route path="/drivercontact" element={<DriverContact />} />

                {/* CAll and Text */}
                <Route path="/callandtext" element={<CallAndText />} />

                {/* Driver found */}
                <Route path="/driverfound" element={<DriverFound />} />

                {/* Driver driver*/}
                <Route
                    path="/userdriverarrived"
                    element={<UserDriverArrived />}
                />

                {/* user dashboard end */}

                {/* driver dashboard start */}
                <Route path="/driverdasboard" element={<DriverDashboard />} />

                {/* DriverAvaliableJob */}
                <Route
                    path="/driveravaliablejob"
                    element={<DriverAvaliableJob />}
                />

                 {/* DriverDeliveryDetail */}
                 <Route
                    path="/driverdeliverydetail"
                    element={<DriverDeliveryDetail />}
                />

                 {/* DriverDeliveryLocation */}
                 <Route
                    path="/driverdeliverylocation"
                    element={<DriverDeliveryLocation />}
                />

                 {/* DriverDeliveryStatus */}
                 <Route
                    path="/driverdeliverystatus"
                    element={<DriverDeliveryStatus />}
                />

                  {/*DriverDeliveryStatusTwo  */}
                  <Route
                    path="/driverdeliverystatustwo"
                    element={<DriverDeliveryStatusTwo />}
                />

                   {/*DriverNewDelivery  */}
                   <Route
                    path="/drivernewdelivery"
                    element={<DriverNewDelivery />}
                />


                

                {/* driver dashboard end */}

                {/* blog admin dashboad singn in and out */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* blog admin dashboad  */}
                <Route path="/AgriAdmin" element={<AgrilogizAdmin />} />
                {/* blog admin management */}
            </Routes>
            {/* <RouterProvider router={router} /> */}
        </>
    );
};

export default App;
