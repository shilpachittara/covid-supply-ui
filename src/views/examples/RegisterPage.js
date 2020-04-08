
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Label,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function SectionLogin() {
  return (
    <>
    <ExamplesNavbar />
      <div
        className="section section-image section-login"
        style={{
          // backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        {/* <Container> */}
        <div className="container">
    
              <Card className="card-register card-register-custom">
                <h3 className="title mx-auto">Register Here</h3>
                <div className="social-line text-center">
                 
                </div>
                <Form className="register-form">
                  <div className="row">
                    <div className="m-r-20 col-sm-4">
                      <h5>Who are you::</h5>
                    </div>
                    <div className="col-sm-6 row">
                <div className="form-check-radio ">
                <Label check style={{marginTop:0}}>
                 
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                 Manufacturer
                  <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio m-l-40">
                <Label check style={{marginTop:0}}>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  Raw Material Suppliers <span className="form-check-sign" />
                </Label>
              </div>
              </div>
              
              </div>


                  {/* <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup> */}
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Submit
                  </Button>
                </Form>
                <div className="forgot">
                  {/* <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button> */}
                </div>
                {/* <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  // href="/register-page"
                  size="lg"
                  // target="_blank"
                >
                  View Register Page
                </Button>
              </div> */}
              </Card>
           
            {/* </Col> */}
          {/* </Row> */}
        {/* </Container> */}
        </div>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
