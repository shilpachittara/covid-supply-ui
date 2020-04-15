
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
        title= "Supply- PPE KIT, Mask"
          meta={[
            { "name": "Homepage", "content": "Description of page" },
            { property: "og:type", content: "article" },
            { property: "og:title", content: "Example title" },
            { property: "og:image", content: "http://example.com/article.jpg" },
            { property: "og:url", content: "http://example.com/example" }
          ]} />
           {/*<Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
           </Helmet>*/}
        <ExamplesNavbar />
        <LandingPageHeader />
        <CategoryDetails />
        <div className="main">
          <div className="section bg-blue text-center">
            <Container>
              <h2 className="title" style={{ color: 'white' }}>Features</h2>
              <Row>
                <Col md="4">
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
                <Col md="4">
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
                <Col md="4">
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
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section landing-section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="text-center">Our Footprint</h2>

                </Col>
              </Row>
              <div className="footprint-landing">
                <h3>Turned 4 manufacturing units into PPE kits manufacturing units</h3>
                <h3>Supplying 1+ lakh PPE units to different state governments </h3>
                <h3>Provided initial capital of about 3 Crore to manufacturers</h3>
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
