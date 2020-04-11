import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import { Link } from 'react-router-dom';

// reactstrap components
import { Col } from "reactstrap";

class ProductRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inWishist: 0, 
            productName: this.props.match.params.productName,
            dataSet: [{
                id: 1,
                name: "Mask"
            },
            {
                id: 4,
                name: "Coverall"
            },
            {
                id: 7,
                name: "Hand Sanitizer"
            },
            {
                id: 3,
                name: "PPE"
            },
            {
                id: 2,
                name: "Gloves"
            },
            {
                id: 5,
                name: "Bouffant Caps"
            },
            {
                id: 6,
                name: "Eye Goggles"
            },
            {
                id: 8,
                name: "Infrared Thermometer"
            },
            {
                id: 9,
                name: "Shoe Cover"
            },
            {
                id: 9,
                name: "Testing kit"
            }
            ]
        }

    }

    componentDidMount() {
        console.log("okokok", this.props)
    }
    onWishlist = (id) => {
        let data = this.state.dataSet.map((item) => {
            if (item.id === id) {
                item.selected = !item.selected
            }
            return item;
        })

        this.setState({ dataSet: data })
    }

    render() {

        return (
            <>
                <div className="main">
                    <div className="section text-center">
                        <Container>
                        <h2 className="title" >{this.state.productName}</h2>
                            <div className="m-t-50">
                                <Row>
                                    {this.state.dataSet.map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 50 }} key={index}>
                                                <Link to="/product/mask">
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + i.name + ".svg")} alt="" style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">{i.name}</h4>
                                                            <p className="description">
                                                                click to place your order
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
