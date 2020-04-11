
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Label,
  Form,
  Input,
 /* InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col*/
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
              {/* who are you radio input section */}
              <div className="row">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Who are you:</h5>
                </div>
                <div className="col-sm-6 row">
                  <div className="form-check-radio ">
                    <Label check style={{ marginTop: 0 }}>

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
                    <Label check style={{ marginTop: 0 }}>
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
              {/* category section dropdown type */}
              <div className="row">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Category:</h5>
                </div>
                <div className="form-group col-sm-6">

                  <select className="form-control" id="sel1" name="sellist1">
                    <option>Select Option  </option>
                    <option>Mask</option>
                    <option>PPE KIT</option>
                    <option>VENTILATOR</option>
                  </select>


                </div>
              </div>
              {/* product section dropdown */}
              <div className="row">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Product:</h5>
                </div>
                <div className="form-group col-sm-6">

                  <select className="form-control " id="sel1" name="sellist1">
                    <option>Select Option  </option>
                    <option>P95</option>
                    <option>N99</option>
                    <option>N95 </option>
                  </select>


                </div>
              </div>
              {/* technical specification text field + upload pdf field */}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Technical Specification:</h5>
                </div>
                <div className="col-sm-6 row">
                  <div className="col-sm-8">
                    <Input placeholder="Product Specification" className=""
                      defaultValue=""
                      id=""
                      type="text" />
                  </div>
                  <div className="col-sm-4">
                    <Input placeholder="Upload PDF" className=""
                      defaultValue=""
                      id=""
                      type="file" />
                  </div>
                </div>

              </div>
              {/* price input type number */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Price:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Price" className=""
                    defaultValue=""
                    id=""
                    type="number" />


                </div>
              </div>
              {/* production capacity/day input type number */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Production Capacity :</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Production Capacity in 1 Day" className=""
                    defaultValue=""
                    id=""
                    type="number" />


                </div>
              </div>

              {/* certification name */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Certification Name:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Certification Name" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>

              {/* Certification type  option drop down*/}
              <div className="row ">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Certification Type:</h5>
                </div>
                <div className="form-group col-sm-6">

                  <select className="form-control " id="sel1" name="sellist1">
                    <option>Select Option  </option>
                    <option>Factory certification</option>
                    <option>Product/Raw Material certificate</option>

                  </select>


                </div>
              </div>

              {/* certifying body input type text*/}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Certifying Body:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Certifying Body Name" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>

              {/* certifying body input type text*/}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Upload Certificate :</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Upload PDF" className=""
                    defaultValue=""
                    id=""
                    type="file" />


                </div>
              </div>

              {/* GST input type text*/}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>GST:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="GST No" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>
              {/* ADDRESSinput type text*/}

              <div className="row ">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Address:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Address Line 1" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  {/* <h5>Address:</h5> */}
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Address Line 2" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>
              {/* GST input type text*/}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>State:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="State" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>
              {/* pincode input type number*/}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Pincode:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Pincode" className=""
                    defaultValue=""
                    id=""
                    type="number" />


                </div>
              </div>

              {/* Name input type text*/}

              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Name:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="Name" className=""
                    defaultValue=""
                    id=""
                    type="text" />


                </div>
              </div>

              {/* mobile no input type number */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Mobile No:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="10 Digit Mobile No" type="text" className=""
                    defaultValue=""
                    id=""
                     />


                </div>
              </div>
              {/* EMAIL input type EMAIL */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Email:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="email" className=""
                    defaultValue=""
                    id=""
                    type="email" />


                </div>
              </div>

              {/*password input type password */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Password:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="password" className=""
                    defaultValue=""
                    id=""
                    type="password" />


                </div>
              </div>

              {/* confirm password input type password */}
              <div className="row m-b-20">
                <div className="m-r-20 col-sm-4 input-field-label">
                  <h5>Confirm Password:</h5>
                </div>
                <div className="col-sm-6">

                  <Input placeholder="confirm password" className=""
                    defaultValue=""
                    id=""
                    type="password" />


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
                className="btn-round register-submit-btn"
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
