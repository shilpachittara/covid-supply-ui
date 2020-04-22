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
import Covidicon from "../../logo.svg"
import TickIcon from "../../assets/icons/confirmation.svg"
import EmailIcon from "../../assets/icons/email.svg"


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
      <Container>
      <div className="bg-blue outer-div-odr-cnfrm">
      <div className="m-t-80">
        <div className="txt-center" style={{display:'flex',flexDirection:'row',justifyContent:'center',marginLeft:'-20px'}}>
        <img src={Covidicon} className="covid-icon"></img>
        <h3>Covid Supply India</h3>
      </div>
      </div>
      <div className=" profile-content" >

       
          <div className="txt-center m-b-30">
            <h3>Thank you for placing your order</h3>
          </div>
          <Row>
            <img src={TickIcon} className="tick-icon" style={{margin:'auto'}}></img>
          </Row>


          <Row>
            <Col className="ml-auto mr-auto text-center m-t-20" md="8">
              <h5>
                Your order has been received successfully. We will contact you in 12 hours.

             </h5>
             
              <br />

            </Col>

          </Row>
          <Col >
          <div style={{textAlign:'center'}}>
          <h5 style={{margin:'auto'}}>Incase you need any help </h5>
          <img src={EmailIcon} style={{width:'25px',height:'25px',margin:'auto'}}></img>
          <div style={{margin:'auto'}}>Connect via Email</div>
          <h4 style={{margin:'auto'}}>support@covidsupply.in</h4>
          </div>
          </Col>
          <br />
          </div>
      </div>

        </Container>

    
    </>
  );
}

export default OrderSuccess;
