import React from 'react';

const DriverText = () => {
    return (
        <div className='px-10 py-10' >
            {/* Select Jurisdiction  */}
            <div className='flex space-x-20'>
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
            <div >
                <h1 className='font-bold pt-20'>Agrilogiz</h1>
                <div className='py-4'>
                    <div className='text-2xl font-bold'>Terms and Conditions</div>
                    <h1>Last Updated: 17th April, 2024</h1>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>1. Introduction</h1>
                    <p>
                        This Driver Agreement Policy ("Policy") outlines the
                        terms and conditions governing the relationship between
                        drivers and our agricultural logistics platform. By
                        accepting this Policy, drivers agree to comply with all
                        terms outlined herein.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>2. Driver Eligibility</h1>
                    <p>
                        Drivers must possess a valid driver's license and any
                        other permits or licenses required by local regulations
                        to operate commercial vehicles. Drivers must undergo a
                        background check and provide necessary documentation to
                        verify their identity, driving history, and eligibility
                        to work.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>3. Vehicle Requirements</h1>
                    <p>
                        Drivers must own or have access to a properly maintained
                        vehicle suitable for transporting agricultural products.
                        Vehicles must meet safety and regulatory standards,
                        including insurance coverage appropriate for commercial
                        transportation.
                    </p>
                </div>

                <div className='py-4'>
                    <h1  className='font-bold'>4. Compliance with Laws and Regulations</h1>
                    <p>
                        Drivers must comply with all applicable laws,
                        regulations, and ordinances governing transportation and
                        agriculture in their operating region. Drivers are
                        responsible for obtaining any permits, licenses, or
                        certifications required for the transportation of
                        agricultural products.
                    </p>
                </div>

                <div className='py-4'>
                    <h1  className='font-bold'>5. Professional Conduct</h1>
                    <p>
                        Drivers are expected to conduct themselves
                        professionally at all times when interacting with
                        customers, partners, and platform administrators.
                        Drivers must adhere to our code of conduct, which
                        prohibits discriminatory behaviour, harassment, or any
                        form of misconduct.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>
                        6. Acceptance and Fulfilment of Transportation Requests
                    </h1>
                    <p>
                        Drivers have the option to accept or decline
                        transportation requests based on their availability and
                        capacity. Once a transportation request is accepted,
                        drivers are expected to fulfill the request promptly and
                        efficiently, adhering to pickup and delivery
                        instructions provided by the platform.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>7. Handling of Agricultural Products</h1>
                    <p>
                        Drivers required to handle agricultural products with
                        care to prevent damage, contamination, or spoilage
                        during transportation. Drivers should follow proper
                        handling and storage protocols to maintain the quality
                        and safety of transported products.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>8. Payment and Compensation</h1>
                    <p>
                        Drivers will receive compensation for transportation
                        services rendered based on factors such as distance,
                        quantity of products, and prevailing market rates. And
                        based on the displayed price for Logistics services,
                        displayed on the platform. Payment will be processed
                        through the platform, and drivers will receive their
                        earnings according to the payment weekly.  It's
                        important to note that a 10% commission charge will be
                        deducted from every Logistics service delivered for
                        using the AgriLogiz Logistics Platform.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>9. Feedback and Dispute Resolution</h1>
                    <p>
                        Drivers may provide feedback, report issues, or raise
                        disputes through the platform's designated channels.
                        Platform administrators will review and address feedback
                        or disputes in a timely and fair manner, striving to
                        achieve a satisfactory resolution for all parties
                        involved.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>10. Termination of Agreement</h1>
                    <p>
                        This Agreement may be terminated by either party with
                        written notice, subject to any contractual obligations
                        or legal requirements. Violation of this Agreement,
                        failure to meet performance standards, or engaging in
                        misconduct may result in immediate termination of the
                        driver's access to the platform.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>11. Amendments and Updates</h1>
                    <p>
                        We reserve the right to amend or update this Policy as
                        necessary to reflect changes in regulations, business
                        practices, or operational requirements. Drivers will be
                        notified of any changes to this Policy, and continued
                        use of the platform constitutes acceptance of the
                        updated terms.
                    </p>
                </div>

                <div className='py-4'>
                    <h1 className='font-bold'>12. Governing Law</h1>
                    <p>
                        This Agreement shall be governed by and construed in
                        accordance with the laws of the Federal Republic of
                        Nigeria, without regard to its conflict of law
                        principles.
                    </p>
                </div>

                <p className='py-4'>
                    By accepting this Policy, drivers acknowledge that they have
                    read, understood, and agreed to abide by the terms and
                    conditions outlined herein
                </p>
            </div>
        </div>
    );
};

export default DriverText;
