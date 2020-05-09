import React, { Component } from "react";
import { Row, Container, Button } from "reactstrap";
import { Link } from 'react-router-dom';

// reactstrap components
import { Col } from "reactstrap";

class CategoryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [{
                id: 1,
                name: "Mask"
            },
            {
                id: 4,
                name: "Coverall"
            },
            {
                id: 3,
                name: "PPE Kit"
            },
            {
                id: 2,
                name: "Gloves"
            },
            {
                id: 7,
                name: "Hand Sanitizer"
            },
            
            {
                id: 5,
                name: "Bouffant Caps"
            },
            {
                id: 6,
                name: "Safety Googles"
            },
            {
                id: 9,
                name: "Shoe Cover"
            },
            {
                id: 8,
                name: "Thermometer"
            },
            {
                id: 10,
                name: "Testing kit"
            }
            ]
        }

    }


    render() {
        return (
            <>
                <div className="main">
                    <div className="section text-center" style={{paddingTop:5,paddingBottom:30}}>
                        <Container>
                            <h2 className="title">Our Products</h2>
                            <div className="m-t-35">
                                <Row>
                                    {this.state.dataSet.slice(0, 4).map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 30 }} key={index}>
                                                <Link to={{pathname: "/all-product", data: `${i.name}`}}>
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + i.name + ".svg")} alt={i.name} style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h3 className="info-title">{i.name}</h3>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>

                                        ))}
                                </Row>
                            </div>
                            <div className="show-more-btn-landing m-t-10">
                                    <Button
                                        className="btn-round mr-1"
                                        color="primary"
                                        outline
                                        type="button"
                                        href="/all-product"
                                    >
                                        More Products
                                    </Button>
                            </div>


                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default CategoryDetails;
