import React from 'react';

const FaqDriverText = () => {
    return (
        <div className="px-10 py-20">
            <div className="flex flex-col items-center text-center justify-center">
                <div className="text-4xl font-bold">
                    Welcome to{' '}
                    <h1 className="inline text-customGreenDark">Agrilogiz</h1>
                </div>
                <div>
                    <div>
                        We're here to help! Search our extensive support
                        resources below to find
                    </div>
                    <div>
                        answers to your questions. If you can't find what you're
                        looking for, you can
                    </div>
                    <div>
                        also contact us directly using the methods listed at the
                        bottom of this page.
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-20">
                <img
                    src="/FAQ.png"
                    alt="faq"
                    className="items-center justify-center"
                    style={{ width: '60%', height: '70%' }}
                />
            </div>

            <div>
                <div className="text-3xl font-bold">
                    Frequently Asked Questions (FAQs) for Drivers on AgriLogiz
                    Agricultural Logistics Platform
                </div>

                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        1. What is AgriLogiz agricultural logistics platform all
                        about, and how does it work for drivers?
                    </h1>
                    <p className="py-4">
                        Our platform operates similarly to Uber but focuses
                        specifically on the agricultural industry. It connects
                        drivers with transportation requests from farmers,
                        distributors, and retailers to facilitate the movement
                        of agricultural products from farms to markets or
                        processing facilities.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        2. How do I sign up as a driver on your platform?
                    </h1>
                    <p className="py-4">
                        Signing up is simple! Download our mobile app or visit
                        our website and follow the prompts to create a driver
                        account. You'll need to provide necessary documentation
                        such as your driver's license, vehicle registration, and
                        insurance information.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        3. What types of vehicles are eligible to become drivers
                        on your platform?
                    </h1>
                    <p className="py-4">
                        We welcome various types of vehicles suitable for
                        transporting agricultural products, including trucks,
                        vans, pickups, and specialized vehicles. Your vehicle
                        must meet safety and regulatory standards and have the
                        necessary insurance coverage.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        4. How do I receive transportation requests, and how do
                        I accept them?
                    </h1>
                    <p className="py-4">
                        Once you're logged into the driver app, you'll receive
                        notifications for transportation requests in your area.
                        You can review the details of each request and choose to
                        accept or decline based on your availability and
                        capacity.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        5. What factors determine the pricing for transportation
                        services?
                    </h1>
                    <p className="py-4">
                        Pricing is based on several factors, including distance,
                        quantity of products, urgency of delivery, and
                        prevailing market rates. Our platform employs dynamic
                        pricing algorithms to ensure fair compensation for
                        drivers and competitive rates for customers.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        6. Do I need any special permits or licenses to
                        transport agricultural products?
                    </h1>
                    <p className="py-4">
                        Depending on your location and the nature of the
                        transportation, you may need specific permits or
                        licenses to transport agricultural products. It's
                        essential to familiarize yourself with local regulations
                        and ensure compliance before accepting transportation
                        requests.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        7. How are payments processed, and when can I expect to
                        receive earnings?
                    </h1>
                    <p className="py-4">
                        Payments for transportation services are processed
                        through the platform, and earnings are typically
                        deposited into your account according to the payment
                        schedule. You can choose from various payment methods,
                        including direct deposit and electronic transfers.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        8. What measures are in place to ensure the safety and
                        quality of transported agricultural products?
                    </h1>
                    <p className="py-4">
                        We prioritize the safety and quality of agricultural
                        products transported through our platform. Drivers are
                        expected to handle products with care and adhere to
                        proper handling and storage pro
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        9. What should I do in case of an issue or dispute
                        during transportation?
                    </h1>
                    <p className="py-4">
                        If you encounter any issues or disputes during
                        transportation, you can contact our customer support
                        team through the app for assistance. We're here to help
                        resolve any concerns and ensure a satisfactory outcome
                        for all parties involved.
                    </p>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-bold">
                        10. How can I provide feedback or suggestions for
                        improving the platform?
                    </h1>
                    <p className="py-4">
                        We value feedback from our drivers and are continually
                        striving to enhance our platform to better serve the
                        agricultural community. You can submit feedback,
                        suggestions, or feature requests through the driver app
                        or contact our support team directly. Your input helps
                        us improve our services and create a better experience
                        for everyone involved.
                    </p>
                </div>
            </div>

            <div>
                <div className="text-xl font-bold text-customGreenDark">
                    Still need help?
                </div>
                <p>
                    If you can't find the answer to your question in our support
                    resources, you can contact us directly using one of the
                    following methods:
                </p>
                <li className=" ">
                    Live chat: Chat with a
                    <ul className="inline text-customGreenDark"> Agrochic</ul>{' '}
                    online in real-time.
                </li>
                <li className=" ">
                    Phone: Call us a
                    <ul className="inline text-customGreenDark">
                        {' '}
                        +2340 000 000 000
                    </ul>{' '}
                    to speak with a customer service representative
                </li>
                <li className=" ">
                    Email: Send us an email at
                    <ul className="inline text-customGreenDark">
                        {' '}
                        Agrilogiz@gmail.com
                    </ul>{' '}
                    and we'll get back to you as soon as possible.
                </li>
            </div>
        </div>
    );
};

export default FaqDriverText;
