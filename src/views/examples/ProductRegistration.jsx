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
                    name: "3 ply Mask"
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
                category: "PPE Kit",
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
        if(this.state.productName){
            this.setState({productName: this.state.productName.replace('-', ' ')})
        }
        this.state.json.forEach((item) => {
            if (item.category === this.state.productName) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })

    }

    componentWillReceiveProps(nextProps) {
        let product = nextProps.history.location.pathname
        let productName = product.slice(9)
        productName = productName.replace('-',' ')
        this.state.json.forEach((item) => {
            if (item.category === productName) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })
        this.setState({ productName: productName })
    }

    render() {

        return (
            <>
                <Helmet
                    title= "Buy SITRA Certified product | Covid Supply"

                    link={[{ href: "http://covidsupply.in/all-product", rel: "canonical" }]}
                    meta={[
                        { "name": "description", "content": "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
                        { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall"},
                        { "name": "twitter:card", "content": "summary_large_image"},
                        { "name": "twitter:site", "content": "@supplycovid"},
                        { "name": "twitter:creator", "content": "@supplycovid"},
                        { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
                        { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
                        { property: "og:type", content: "product" },
                        { property: "og:title", content: "Buy SITRA Certified product | Covid Supply" },
                        { property: "og:description", content: "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation." },
                        { property: "og:url", content: "http://covidsupply.in/all-product" },
                        { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
                    ]}
                    script={[
                        {
                            type: "application/ld+json", innerHTML:
                                `{ "@context": "http://schema.org",
                                   "@type": "Product",
                                   "name": "Buy Medical supplies for covid-19",
                                   "url": "http://www.covidsupply.in/",
                                   "logo": "http://covidsupply.in/coronavirus.png",
                                   "description": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies",
                                }`
                        }
                    ]} />
                <ExamplesNavbar />
                <div className="main">
                    <div className="section text-center">
                        <Container>
                            <h1 className="title" >Our Products</h1>
                            <div className="m-t-50">
                                <Row>
                                    {this.state.json.map((i, index) =>
                                        (
                                            <Col className="product-view" md="3" key={index}>
                                                <Link to={`/product/${i.category.replace(' ', '-')}`}>
                                                    <div className="info">
                                                        <div className="icon icon-info">
                                                            <img className="" src={require("../../assets/icons/" + i.category + ".svg")} alt={i.category} style={{ width: 80, height: 80 }}></img>
                                                        </div>
                                                        <div className="description">
                                                            <h3 className="info-title">{i.category}</h3>
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
