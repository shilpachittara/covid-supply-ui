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
        title="Buy SITRA certified PPE kits, n95 masks| Covid Supply"
        link={[{ href: "http://covidsupply.in/order-confirmation", rel: "canonical" }]}
        meta={[
          { "name": "description", "content": "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
          { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall"},
          { "name": "twitter:card", "content": "summary_large_image"},
          { "name": "twitter:site", "content": "@supplycovid"},
          { "name": "twitter:creator", "content": "@supplycovid"},
          { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
          { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
          { property: "og:type", content: "organization" },
          { property: "og:title", content: "Buy SITRA certified PPE kits, n95 masks| Covid Supply" },
          { property: "og:description", content: "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
          { property: "og:url", content: "http://covidsupply.in/order-confirmation" },
          { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
        ]} />
      <ExamplesNavbar />
      <Container>
      <div className="bg-blue outer-div-odr-cnfrm">
      <div className="m-t-80">
        <div className="txt-center" style={{display:'flex',flexDirection:'row',justifyContent:'center',marginLeft:'-20px'}}>
        <img src={Covidicon} alt="logo" className="covid-icon"></img>
        <h3>Covid Supply India</h3>
      </div>
      </div>
      <div className=" profile-content" >

       
          <div className="txt-center m-b-30">
            <h3>Thank you for placing your order</h3>
          </div>
          <Row>
            <img src={TickIcon} className="tick-icon" style={{margin:'auto'}} alt="confirmation"></img>
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
          <img src={EmailIcon} style={{width:'25px',height:'25px',margin:'auto'}} alt="email"></img>
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
