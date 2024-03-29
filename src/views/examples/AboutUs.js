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
import DemoFooter from "components/Footers/DemoFooter.js";
import {Helmet} from "react-helmet";

function ProfilePage() {


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
        link={[{ href: "http://covidsupply.in/about-us", rel: "canonical" }]}
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
          { property: "og:url", content: "http://covidsupply.in/about-us" },
          { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
        ]}
       />

      <ExamplesNavbar />
      {/* <ProfilePageHeader /> */}
      <div className="m-t-80"><div className="txt-center">
        <h1>About Us</h1>
        <hr ></hr>
      </div>
      </div>
      
      <div className="section profile-content" >

        <Container>
          <div className="txt-center m-b-30">
            <h2>Our Story</h2>
          </div>


          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                The effort started during Janta curfew on 22nd March and gained significant momentum in a week time when we received multiple calls from AIIMS doctors who were not able to procure essential gear and safety equipment to protect themselves. Over the past weeks, we have been helping hospitals and governments with the Supply of PPE kits, masks, IR thermometers and whatever else they need in these tough times. We have identified issues in initial days and have been trying to bridge the gap in the supply chain. The lack of transparency and hoarding in the supply chain are some important challenges we are trying to address.
              </p>
              <br />

            </Col>
          </Row>
          <br />

        </Container>
        <Container>
          <div className="txt-center m-b-30">
            <h2>What do we do ?</h2>
          </div>


          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                We are sourcing genuine and certified medical supplies locally for Governments, Hospitals, and Institutions across the country. We gather demand from institutions and governments and source directly from manufacturers, thus removing middlemen, reducing cost and increasing response times to deliver supplies quickly. We help procure N95 masks, surgical masks, PPE kits, testing supplies, IR thermometers, as well as other medical supplies. We aim to make the medical supply chain middlemen free so that there is no scarcity of critical supplies for frontline healthcare professionals.
            </p>
              <br />

            </Col>
          </Row>
          <br />

        </Container>
        <Container>
          <div className="txt-center m-b-30">
            <h2>How Do we do it ? </h2>
          </div>


          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <ul>
                <li>
                  <b>Post your requirement : </b>
           We only entertain requests from Government Bodies, Hospitals, NGOs and other esteemed institutions who are end-users of the equipments (N95 masks, goggles, surgical masks, isolation gown, shoe covers, gloves, ICU ventilators, etc)
           </li>
              </ul>
              <ul>
                <li>
                  <b>Supply Confirmation : </b>
           We will send your requests to manufacturers and suppliers across India within the next 12 hours. Once we get confirmation on the items requested, we send you an email with confirmation so that you can raise PO to get things going.
           </li>
              </ul>
              <ul>
                <li>
                  <b>QC & Shipping : </b>
           We will help you with arranging quality checks, logistics, verification, purchase, documentation, payment, and everything else involved with the purchase.
           </li>
              </ul>
              <br />

            </Col>
          </Row>
          <br />

        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
