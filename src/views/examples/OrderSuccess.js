/*!

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import {Helmet} from "react-helmet";

function OrderSuccess() {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Helmet
        title="Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"
        link={[{ href: "http://covidsupply.in/order-confirmation", rel: "canonical" }]}
        meta={[
          { "name": "description", "content": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation " },
          { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall" },
          { property: "og:type", content: "product" },
          { property: "og:title", content: "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
          { property: "og:description", content: "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation." },
          { property: "og:url", content: "http://covidsupply.in/order-confirmation" }
        ]}
        script={[
          {
            type: "application/ld+json", innerHTML:
              `{ "@context": "http://schema.org" ,
              "@type": "Organization",
              "name": “CovidSupply",
              "url": "http://www.covidsupply.in/"
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "support@covidsupply.in",
                  "contactType": "customer service"
                }
              ]}`}
        ]} />
      <ExamplesNavbar />
      <div className="m-t-80"><div className="txt-center">
        <h1>Covid Supply India</h1>
      </div>
      </div>
      <div className="section profile-content" >

        <Container>
          <div className="txt-center m-b-30">
            <h2>Thank you for placing your order</h2>
          </div>


          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h3>
                Your order have been received successfully. we will get back to you in 12 hours
             </h3>
              <br />

            </Col>
          </Row>
          <br />

        </Container>

      </div>
    </>
  );
}

export default OrderSuccess;
