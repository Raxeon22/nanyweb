import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"


const TermsConditions = () => {
    return (
        <>
            <Navbar header={ true } shop={ true } />

            <Container>
                <div className="policy">
                    <h1>Termes et conditions</h1>

                    <h5>1. General</h5>
                    <p>Subject to stock availability. We try to maintain accurate stock counts on our website but from time-to-time there may be a stock discrepancy and we will not be able to fulfill all your items at time of purchase. In this instance, we will fulfill the available products to you, and contact you about whether you would prefer to await restocking of the backordered item or if you would prefer for us to process a refund.</p>

                    <h5>2. Shipping Costs</h5>
                    <p>Shipping costs are calculated during checkout based on weight, dimensions and destination of the items in the order. Payment for shipping will be collected with the purchase. <br /> This price will be the final price for shipping cost to the customer.</p>

                    <h5>3. Returns</h5>
                    <h5>3.1 Return Due To Change Of Mind</h5>
                    <p>Horizon Embroidery will happily accept returns due to change of mind as long as a request to return is received by us within 7 days of receipt of item and are returned to us in original packaging, unused and in resellable condition.
                        <br /> Return shipping will be paid at the customers expense and will be required to arrange their own shipping.
                    </p>
                    <p>Once returns are received and accepted, refunds will be processed to store credit for a future purchase. We will notify you once this has been completed through email.</p>
                    <p>(Horizon Embroidery) will refund the value of the goods returned but will NOT refund the value of any shipping paid.</p>

                    <h5>3.2 Warranty Returns</h5>
                    <p>Horizon Embroidery will happily honor any valid warranty claims, provided a claim is submitted within 90 days of receipt of items. <br />
                        Customers will be required to pre-pay the return shipping, however we will reimburse you upon successful warranty claim. <br />
                        Upon return receipt of items for warranty claim, you can expect Horizon Embroidery to process your warranty claim within 7 days.<br />
                        Once warranty claim is confirmed, you will receive the choice of:<br />
                        (a) refund to your payment method <br />
                        (b) a refund in store credit <br />
                        (c) a replacement item sent to you (if stock is available)
                    </p>

                    <h5>4. Delivery Terms</h5>
                    <h5>4.1 Transit Time Domestically</h5>
                    <p>In general, domestic shipments are in transit for 2 - 7 days</p>



                </div>
            </Container>
            <Footer />

        </>
    )
}
export default TermsConditions