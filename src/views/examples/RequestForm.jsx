
import React, { Component } from "react";

// reactstrap components
import {
    Button,
    Card,
    Label,
    Form,
    Input,
    Container,
    /* InputGroupAddon,
     InputGroupText,
     InputGroup,
     Container,
     Row,
     Col*/
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

// core components
class RequestForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.match.params.category,
            product: this.props.match.params.product
        }

    }

    componentDidMount() {
        console.log("okokok", this.props)
    }


    render() {
        return (
            <>
                <ExamplesNavbar />
                <div className="section section-login">
                    <Container> 

                        <Card className="card-register card-register-custom">
                            <h3 className="title mx-auto">Register Here</h3>
                            <div className="social-line text-center">

                            </div>
                            <Form className="register-form">
                                {/* who are you radio input section */}
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

                                <Button
                                    block
                                    className="btn-round register-submit-btn"
                                    color="danger"
                                    type="button"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </Container> 
                </div>
            </>
        );
    }
}

export default RequestForm;
