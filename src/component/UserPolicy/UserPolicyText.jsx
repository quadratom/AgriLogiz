import React from 'react';

const UserPolicyText = () => {
    return (
        <div className="px-10 py-10">
            {/* Select Jurisdiction  */}
            <div className="flex space-x-20">
                <div>
                    <div>Select Jurisdiction</div>
                    <div>Nigeria</div>
                </div>

                <div>
                    <div>Language:</div>
                    <div>English</div>
                </div>
            </div>

            {/* Terms and Conditions */}
            <div>
                <h1 className="font-bold pt-20">Agrilogiz</h1>
                <div className="py-4">
                    <div className="text-2xl font-bold">
                        Terms and Conditions
                    </div>
                    <h1>Last Updated: 17th April, 2024</h1>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">1. Introduction</h1>
                    <p>
                        This Customer Agreement Policy ("Policy") outlines the
                        terms and conditions governing the use of our
                        agricultural logistics platform by customers. By using
                        our platform, customers agree to comply with all terms
                        outlined herein.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">
                        2. Registration and Account Creation
                    </h1>
                    <p>
                        Customers may register and create an account on our
                        platform to access our services. Customers are
                        responsible for providing accurate and up-to-date
                        information during the registration process.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">
                        3. Placing Transportation Requests
                    </h1>
                    <p>
                        Customers may request transportation services for the
                        delivery of agricultural products through our platform.
                        Transportation requests must include relevant details
                        such as pickup and delivery locations, type and quantity
                        of products, and preferred pickup time.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">
                        4. Acceptance of Transportation Requests
                    </h1>
                    <p>
                        Once a transportation request is submitted, customers
                        agree to accept the terms and conditions associated with
                        the transportation service, including pricing and
                        delivery timelines. Customers may receive notifications
                        regarding the status of their transportation requests,
                        including confirmation of acceptance by a driver.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">5. Payment and Billing:</h1>
                    <p>
                        Customers will be billed for transportation services
                        rendered based on factors such as distance, quantity of
                        products, and prevailing market rates. Payment for
                        transportation services will be processed through the
                        platform using the payment method specified by the
                        customer.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">
                        6. Quality and Safety of Agricultural Products
                    </h1>
                    <p>
                        Customers are responsible for ensuring the quality and
                        safety of the agricultural products being transported.
                        Customers should package products appropriately to
                        prevent damage or spoilage during transportation and
                        adhere to any relevant safety and regulatory standards.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">7. Feedback and Communication</h1>
                    <p>
                        Customers may provide feedback on their transportation
                        experience and communicate any issues or concerns
                        through the platform's designated channels. Platform
                        administrators will review and address feedback or
                        issues in a timely and efficient manner, striving to
                        achieve a satisfactory resolution for all parties
                        involved.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">8. Cancellation and Refunds</h1>
                    <p>
                        Customers may cancel transportation requests within a
                        specified timeframe, subject to any applicable
                        cancellation fees or penalties. Refunds for cancelled
                        transportation requests will be processed according to
                        the platform's refund policy.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">
                        9. Compliance with Laws and Regulations
                    </h1>
                    <p>
                        Customers are expected to comply with all applicable
                        laws, regulations, and ordinances governing
                        transportation and agriculture in their operating
                        region. Customers should ensure that the transportation
                        of agricultural products complies with any permits,
                        licenses, or certifications required by local
                        authorities.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">10. Termination of Agreement</h1>
                    <p>
                        This Agreement may be terminated by either party with
                        written notice, subject to any contractual obligations
                        or legal requirements. Violation of this Agreement,
                        misuse of the platform, or engaging in fraudulent
                        activities may result in termination of the customer's
                        access to the platform.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">11. Amendments and Updates</h1>
                    <p>
                        We reserve the right to amend or update this Policy as
                        necessary to reflect changes in regulations, business
                        practices, or operational requirements. Customers will
                        be notified of any changes to this Policy, and continued
                        use of the platform constitutes acceptance of the
                        updated terms.
                    </p>
                </div>

                <div className="py-4">
                    <h1 className="font-bold">12. Governing Law</h1>
                    <p>
                        This Agreement shall be governed by and construed in
                        accordance with the laws of the Federal Republic of
                        Nigeria, without regard to its conflict of law
                        principles.
                    </p>
                </div>

                <p className="py-2">
                    By using our platform, customers acknowledge that they have
                    read, understood, and agreed to abide by the terms and
                    conditions outlined herein.
                </p>
            </div>
        </div>
    );
};

export default UserPolicyText;
