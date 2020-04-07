
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div
        className="register-body"
        style={{
         
          // backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >

<div className="register-heading">
  <h3>
 Register Here
  </h3>
</div>
<div className="container">

<div className="register-form">
<form>
  <ol>
    <li>
  <div className="row register-typeVendor">
    <div className="col-sm-4">
  <h5>
  Type of Vendor:
  </h5>
  </div>
  <div className="col-sm-7 register-typeVendor-radio">
<label class="radio-inline">
  
      <input type="radio" name="optradio"/>Manufacturer
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio"/>Raw Material Suppliers
    </label>

    </div>
    </div>
    </li>
    </ol>
</form>

</div>
</div>

        {/* <div className="filter" /> */}
        {/* <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container> */}


        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, 
            COVID SUPPLY INDIA
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
