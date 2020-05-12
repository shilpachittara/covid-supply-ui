
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
import ContactUs from "components/Category/ContactUs";
import supportImg1 from "../../assets/img/added/medium.jpg"
import supportImg2 from "../../assets/img/added/corothonindia.jpg"
import supportImg3 from "../../assets/img/added/covidtaskforce.jpg"

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
        title= "Buy SITRA certified products PPE kits, n95 masks| Covid Supply"
        link = {[{href: "http://covidsupply.in/" , rel: "canonical"}]}
          meta={[
            { "name": "description", "content": "Buy certified products PPE kits, N95 masks, Nitrile gloves, Face shields in manufacturing units Delhi, Mumbai, Bangalore, Indore, Hyderabad for hospitals place order now." },
            { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall"},
            { "name": "twitter:card", "content": "summary_large_image"},
            { "name": "twitter:site", "content": "@supplycovid"},
            { "name": "twitter:creator", "content": "@supplycovid"},
            { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
            { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
            { property: "og:type", content: "organization" },
            { property: "og:title", content: "Buy SITRA certified PPE kits, n95 masks| Covid Supply" },
            { property: "og:description", content: "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
            { property: "og:url", content: "http://covidsupply.in/" },
            { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
          ]} 
          script={[
            {type: "application/ld+json", innerHTML: 
            `{ "@context": "http://schema.org",
               "@type": "Organization",
               "name": "CovidSupply",
               "url": "http://covidsupply.in/",
               "logo": "http://covidsupply.in/coronavirus.png",
               "description": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies"
            }`}
        ]}/>
        <ExamplesNavbar />
        <LandingPageHeader />
        <CategoryDetails />
        <div className="main" height={500}>
          <div className="section bg-blue text-center detail-container" >
            <Container>
              <h2 className="title" style={{ color: 'white',marginBottom:-10 }}>Features</h2>
              <Row>
                <Col md="6">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar border-radius-none">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="manufacture"
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
                          <li><h5>Access dashboard and check your past orders</h5></li>
                          <li><h5>Check our supply count and lead time and other live information</h5></li>
                          <li><h5>Place order with us at one click of a button</h5></li>
                          <li><h5>If system is integrated in case of hospitals, we can share expected requirement as well</h5></li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-profile card-plain m-l-50">
                    <div className="card-avatar border-radius-none">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="supplier"
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
                      <div className="m-l-50">
                        <ul style={{ fontSize: 13, textAlign: 'left', color: 'white', fontWeight: 400, lineHeight: 1.8 }}>
                          <li><h5>Live demand analytics region wise</h5></li>
                          <li><h5>Place order with 100% advance capital</h5></li>
                          <li><h5>Technical assistance and rectification of underlying issues</h5></li>
                          <li><h5>Get product certification from SITRA and DRDE</h5></li>
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
                          alt="certification bodies"
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
        <ContactUs />
        <Container>
        <div className="in-the-news"style={{margin:'auto'}}>
          <div>
          <h2 className="text-center">In the News</h2>
          </div>
          <div className="row" style={{width:'100%',marginTop:"50px",marginBottom:'50px'}}>
            <div className="col-sm-4" style={{marginLeft:"",marginRight:""}}>
              <img style={{width:"auto",height:"100px"}} src={ supportImg1}></img>
            </div>
          <div className="col-sm-5"> <img style={{width:"auto",height:"100px"}} src={ supportImg2}></img></div>
          <div className="col-sm-3">
          <img style={{width:"auto",height:"100px"}} src={ supportImg3}></img>
          </div>
          </div>
        </div>
        </Container>
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
