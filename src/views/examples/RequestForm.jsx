
import React, { Component } from "react";

// reactstrap components
import {
    Button,
    Card,
    Form,
    Input,
    Container
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

// core components
class RequestForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.match.params.category,
            product: this.props.match.params.product,
            dataSet: [],
            json: [{
                id: 1,
                category: "Mask",
                productDetail: [{
                    id: "1a",
                    name: "3-ply Mask"
                },
                {
                    id: "1b",
                    name: "N-95"
                }
                ]
            },
            {
                id: 4,
                category: "Coverall",
                productDetail: [{
                    id: "4a",
                    name: "Coverall 1"
                }]
            },
            {
                id: 7,
                category: "Hand Sanitizer",
                productDetail: [{
                    id: "7a",
                    name: "Hand Sanitizer 1"
                }]
            },
            {
                id: 3,
                category: "PPE",
                productDetail: [{
                    id: "3a",
                    name: "PPE 1"
                }]
            },
            {
                id: 2,
                category: "Gloves",
                productDetail: [{
                    id: "2a",
                    name: "Gloves 1"
                }]
            },
            {
                id: 5,
                category: "Bouffant Caps",
                productDetail: [{
                    id: "5a",
                    name: "Bouffant Caps 1"
                }]
            },
            {
                id: 6,
                category: "Eye Goggles",
                productDetail: [{
                    id: "6a",
                    name: "Eye Goggles 1"
                }]
            },
            {
                id: 8,
                category: "Infrared Thermometer",
                productDetail: [{
                    id: "8a",
                    name: "Infrared Thermometer 1"
                }]
            },
            {
                id: 9,
                category: "Shoe Cover",
                productDetail: [{
                    id: "9a",
                    name: "Shoe Cover 1"
                }]
            },
            {
                id: 10,
                category: "Testing kit",
                productDetail: [{
                    id: "10a",
                    name: "Testing kit 1"
                }]
            }
            ]
        }

    }
    componentWillMount() {
        this.state.json.forEach((item) => {
            if (item.category === this.state.category) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })
       
        console.log("okokok", this.props)
    }

    changeProduct = (event) => {
        this.setState({category:"Select Option"});
        this.setState({product:"Select Option"});
        let selectedValue = event.target.value;

        this.state.json.forEach((item) => {
            if (item.category === selectedValue) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })
    }

    render() {
        let categoryOptions = this.state.json.map((data) =>
            <option
                key={data.id}
                value={data.category}>
                {data.category}
            </option>
        );

        let productOptions = this.state.dataSet.map((data) =>
            <option
                key={data.id}
                value={data.name}>
                {data.name}
            </option>
        );
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

                                        <select className="form-control" id="sel1" name="sellist1" onChange={this.changeProduct}>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
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
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5>Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id=""
                                            type="number" />


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
                                <Button
                                    block
                                    className="btn-round register-submit-btn"
                                    color="danger"
                                    type="button"
                                >
                                    +Add more items
                                </Button>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5>Organization Name:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Organization Name" className=""
                                            defaultValue=""
                                            id=""
                                            type="text" />


                                    </div>
                                </div> <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5>Organization Type:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <select className="form-control " id="sel1" name="sellist1">
                                            <option>Select Option  </option>
                                            <option>Hospital</option>
                                            <option>Government</option>
                                            <option>Research bodies</option>
                                            <option>Other</option>
                                        </select>

                                        <Input placeholder="For other type here" className=""
                                            defaultValue=""
                                            id=""
                                            type="text" />


                                    </div>
                                </div>
                                {/* ADDRESSinput type text*/}

                                <div className="row m-b-20">
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
