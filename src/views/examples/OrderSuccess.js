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
              <p>
                  Your order have been received successfully. will get back to you in 12 hours
             </p>
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

export default OrderSuccess;
