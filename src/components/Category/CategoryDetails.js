import React, { Component } from "react";
import { Row, Container, Button } from "reactstrap";
import { Link } from 'react-router-dom';

// reactstrap components
import { Col } from "reactstrap";

class CategoryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inWishist: 0,
            dataSet: [{
                id: 1,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 2,
                selected: false,
                icon: "medical-mask.svg",
                name: "Gloves"
            },
            {
                id: 3,
                selected: false,
                icon: "medical-mask.svg",
                name: "PPE"
            },
            {
                id: 4,
                selected: false,
                icon: "medical-mask.svg",
                name: "Coverall"
            },
            {
                id: 5,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 6,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 7,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 8,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 9,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 10,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
            },
            {
                id: 11,
                selected: false,
                icon: "medical-mask.svg",
                name: "Mask"
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
                            <div className="m-t-50">
                                <Row>
                                    {this.state.dataSet.map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 50 }} key={index}>
                                                <Link to="/product-registration">
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + i.icon)} alt="" style={{ width: 80, height: 80 }}></img>
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
                            <div className="show-more-btn-landing m-t-20">
                                <Button
                                    className="btn-round mr-1"
                                    color="primary"
                                    outline
                                    type="button"
                                    //onClick={() => this.state.count = true}
                                >
                                    Show More
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
