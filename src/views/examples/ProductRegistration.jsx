import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import { Link } from 'react-router-dom';

// reactstrap components
import { Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import { Helmet } from "react-helmet";

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
                    name: "Coverall SS"
                },
                {
                    id: "4b",
                    name: "Coverall SMS"
                },
                {
                    id: "4c",
                    name: "Coverall SSMMS"
                }]
            },
            {
                id: 7,
                category: "Hand Sanitizer",
                productDetail: [{
                    id: "7a",
                    name: "60 percent Alcohol"
                },
                {
                    id: "7b",
                    name: "70 percent Alcohol"
                },
                {
                    id: "7c",
                    name: "80 percent Alcohol"
                }]
            },
            {
                id: 3,
                category: "PPE-Kit",
                productDetail: [{
                    id: "3a",
                    name: "PPE SS"
                },
                {
                    id: "3b",
                    name: "PPE SMS"
                },
                {
                    id: "3c",
                    name: "PPE SSMMS"
                }]
            },
            {
                id: 2,
                category: "Gloves",
                productDetail: [{
                    id: "2a",
                    name: "Nitrile"
                }]
            },
            {
                id: 5,
                category: "Bouffant Caps",
                productDetail: [{
                    id: "5a",
                    name: "Bouffant Cap"
                }]
            },
            {
                id: 6,
                category: "Eye Goggles",
                productDetail: [{
                    id: "6a",
                    name: "Eye Goggle"
                }]
            },
            {
                id: 8,
                category: "Thermometer",
                productDetail: [{
                    id: "8a",
                    name: "Infrared Thermometer"
                }]
            },
            {
                id: 9,
                category: "Shoe Cover",
                productDetail: [{
                    id: "9a",
                    name: "Shoe Cover"
                }]
            },
            {
                id: 10,
                category: "Testing kit",
                productDetail: [{
                    id: "10a",
                    name: "Testing kit"
                }]
            }
            ]
        }

    }

    componentDidMount() {
        this.state.json.forEach((item) => {
            if (item.category === this.state.productName.replace('-', ' ')) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })

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
    }

    render() {

        let pagetitle
        if (this.state.productName) {
            pagetitle = "Buy Original " + this.state.productName.replace('-', ' ') + " SITRA Certified product | Covid Supply"
        }
        else {
            pagetitle = "Buy Original SITRA Certified product | Covid Supply"
        }

        return (
            <>
                <Helmet
                    title={pagetitle}
                    link={[{ href: "http://covidsupply.in/product", rel: "canonical" }]}
                    meta={[
                        { "name": "description", "content": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation " },
                        { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall" },
                        { property: "og:type", content: `${pagetitle}` },
                        { property: "og:title", content: `${pagetitle}` },
                        { property: "og:description", content: "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation." },
                        { property: "og:url", content: "http://covidsupply.in/product" }
                    ]}
                    script={[
                        {
                            type: "application/ld+json", innerHTML:
                                `{ "@context": "http://schema.org" ,
                                   "@type": "Organization",
                                   "name": “CovidSupply",
                                   "url": "http://www.covidsupply.in/"
                                   "contactPoint": [
                                       {
                                           "@type": "ContactPoint",
                                           "email": "support@covidsupply.in",
                                           "contactType": "customer service"
                                        }
                                    ]
                                }`
                        }
                    ]} />
                <ExamplesNavbar />
                <div className="main">
                    <div className="section text-center">
                        <Container>
                            <h2 className="title" >Our Products</h2>
                            <div className="m-t-50">
                                <Row>
                                    {this.state.json.map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 10, maxWidth: '20%' }} key={index}>
                                                <Link to={`/product/${i.category.replace(' ', '-')}`}>
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + i.category + ".svg")} alt="" style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">{i.category}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                        ))}
                                </Row>
                            </div>

                        </Container>

                        <Container>
                            <h2 className="title" >{this.state.productName.replace('-', ' ')}</h2>
                            <div className="m-t-50">
                                <Row>
                                    {this.state.dataSet.map((i, index) =>
                                        (
                                            <Col md="3" style={{ marginBottom: 50 }} key={index}>
                                                <Link to={`/request-form/${this.state.productName}/${i.name.replace(/\s/g, '-')}`}>
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + this.state.productName.replace('-', ' ') + ".svg")} alt="" style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">{i.name}</h4>
                                                            <p className="description">
                                                                Select Product to place your order
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
