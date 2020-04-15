import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import { Link } from 'react-router-dom';

// reactstrap components
import { Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

class ProductRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryName: null,
            dataSet: [],
            productName: this.props.match.params.productName,
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

    componentDidMount() {
        this.state.json.forEach((item) => {
            if (item.category === this.state.productName) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })
        console.log("okokok", this.props)

    }

    componentWillReceiveProps(nextProps) {
        let product = nextProps.history.location.pathname
        let productName = product.slice(9)
        this.state.json.forEach((item) => {
            if (item.category === productName) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })
        this.setState({ productName: productName })
        console.log("test", productName)
    }

    render() {

        return (
            <>
                <ExamplesNavbar />
                <div className="main">
                    <div className="section text-center">
                        <Container>
                            <h2 className="title" >Other Products</h2>
                            <div className="m-t-50">
                                <Row>
                                    {this.state.json.map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 10, maxWidth: '20%'}} key={index}>
                                                <Link to={`/product/${i.category}`}>
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + i.category + ".svg")} alt="" style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">{i.category}</h4>
                                                            <p className="description">
                                                                Select the product
                                                        </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                        ))}
                                </Row>
                            </div>

                        </Container>

                        <Container>
                            <h2 className="title" >{this.state.productName}</h2>
                            <div className="m-t-50">
                                <Row>
                                    {this.state.dataSet.map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 50 }} key={index}>
                                                <Link to={`/request-form/${this.state.productName}/${i.name}`}>
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + this.state.productName + ".svg")} alt="" style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">{i.name}</h4>
                                                            <p className="description">
                                                                select to place your order
                                                        </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>

                                        ))}
                                </Row>
                            </div>

                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductRegistration;
