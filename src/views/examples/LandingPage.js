
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import CategoryDetails from "components/Category/CategoryDetails";
import { Helmet } from "react-helmet";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="application">
        <Helmet
        title= "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"
        link = {[{href: "http://covidsupply.in/home" , rel: "canonical"}]}
          meta={[
            { "name": "description", "content": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation " },
            { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall"},
            { "name": "twitter:card", "content": "summary_large_image"},
            { "name": "twitter:site", "content": "@Covidsupply"},
            { "name": "twitter:creator", "content": "@Covidsupply"},
            { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
            { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
            { property: "og:type", content: "product" },
            { property: "og:title", content: "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
            { property: "og:description", content: "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation." },
            { property: "og:url", content: "http://covidsupply.in/home" }
          ]} 
          script={[
            {type: "application/ld+json", innerHTML: 
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
        ]}/>
        <ExamplesNavbar />
        <LandingPageHeader />
        <CategoryDetails />
        <div className="main" height={500}>
          <div className="section bg-blue text-center" style={{paddingTop:15,height:'75vh'}}>
            <Container>
              <h2 className="title" style={{ color: 'white',marginBottom:-10 }}>Features</h2>
              <Row>
                <Col md="6">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar border-radius-none">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/icons/investor.svg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4" style={{ color: 'white', fontWeight: 400, marginBottom: 20 }}>For Buyers</CardTitle>
                        </div>
                      </a>

                      <div className="">
                        <ul style={{ fontSize: 13, textAlign: 'left', color: 'white', fontWeight: 400, lineHeight: 1.8 }}>
                          <li>Access dashboard and check your past orders</li>
                          <li>Check our supply count and lead time and other live information</li>
                          <li>Place order with us at one click of a button</li>
                          <li>If system is integrated in case of hospitals, we can share expected requirement as well</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar border-radius-none">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/icons/supplier.svg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4" style={{ color: 'white', fontWeight: 400, marginBottom: 20 }}>For Suppliers</CardTitle>
                        </div>
                      </a>
                      <div className="">
                        <ul style={{ fontSize: 13, textAlign: 'left', color: 'white', fontWeight: 400, lineHeight: 1.8 }}>
                          <li>Live demand analytics region wise </li>
                          <li>Place order with 100% advance capital</li>
                          <li>Technical assistance and rectification of underlying issues </li>
                          <li>Get product certification from SITRA and DRDE</li>
                        </ul>
                      </div>
                    </CardBody>
                   
                  </Card>
                </Col>
                {/*<Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar border-radius-none">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/icons/contract.svg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4" style={{ color: 'white', fontWeight: 400, marginBottom: 20 }}>For Certification Bodies</CardTitle>
                              </div>
                      </a>
                     
                      <div className="">
                        <ul style={{ fontSize: 13, textAlign: 'left', color: 'white', fontWeight: 400, lineHeight: 1.8 }}>
                          <li>Access dashboard and check your past orders</li>
                          <li>Check our supply count and lead time and other live information</li>
                          <li>Place order with us at one click of a button</li>
                          <li>If system is integrated in case of hospitals, we can share expected requirement as well</li>
                        </ul>
                      </div>
                    </CardBody>
                    
                   </Card>
      </Col>*/}
              </Row>
            </Container>
          </div>
          <div className="section landing-section"  style={{paddingTop:15}}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="text-center">Our Footprint</h2>

                </Col>
              </Row>
              <div className="footprint-landing">
                <hr/>
                <h4>Turned 4 manufacturing units into PPE kits manufacturing units</h4>
                <h4>Supplying 1+ lakh PPE units to different state governments </h4>
                <h4>Provided initial capital of about 3 Crore to manufacturers</h4>
              </div>
            </Container>
          </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
