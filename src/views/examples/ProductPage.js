import React, { Component } from "react";
import { Row, Button } from "reactstrap";
import { Link } from 'react-router-dom';

// reactstrap components
import { Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import { Helmet } from "react-helmet";
import DemoFooter from "components/Footers/DemoFooter";

class ProductRegistration extends Component {
    dataSet = []
    constructor(props) {
        super(props)
        this.productSelection = this.productSelection.bind(this)
        this.state = {
            dataSet: [],
            json: [{
                id: 1,
                category: "Mask",
                productDetail: [
                    {
                        id: "1b",
                        name: "KN95 Mask"
                    }
                ]
            },
            {
                id: 4,
                category: "Coverall",
                productDetail: [{
                    id: "4a",
                    name: "Coverall"
                }]
            },
            {
                id: 6,
                category: "Safety Googles",
                productDetail: [{
                    id: "6a",
                    name: "Safety Googles"
                }]
            },
            {
                id: 3,
                category: "PPE Kit",
                productDetail: [{
                    id: "3a",
                    name: "PPE Kit"
                }]
            },
            {
                id: 2,
                category: "Gloves",
                productDetail: [{
                    id: "2a",
                    name: "Gloves"
                }]
            },

            ]
        }

    }

    componentWillMount() {
        let finalList = []
        if (this.props.history.location.data) {
            this.state.json.forEach((item) => {
                if (item.category === this.props.history.location.data) {
                    let data = item.productDetail
                    data.forEach((productItem) => {
                        let list = {}
                        list['id'] = productItem.id
                        list['name'] = productItem.name
                        finalList.push(list)
                    })
                }
            })
        }
        else {
            this.state.json.forEach((item) => {
                let data = item.productDetail
                data.forEach((productItem) => {
                    let list = {}
                    list['id'] = productItem.id
                    list['name'] = productItem.name
                    finalList.push(list)
                })
            })
        }

        this.setState({ dataSet: finalList })
    }

    productSelection(category) {
        let finalList = []
        this.state.json.forEach((item) => {
            if (category === "all") {
                let data = item.productDetail
                data.forEach((productItem) => {
                    let list = {}
                    list['id'] = productItem.id
                    list['name'] = productItem.name
                    finalList.push(list)
                })
            }
            else if (item.category === category) {
                let data = item.productDetail
                data.forEach((productItem) => {
                    let list = {}
                    list['id'] = productItem.id
                    list['name'] = productItem.name
                    finalList.push(list)
                })
            }
        })
        this.setState({ dataSet: finalList })
    }

    render() {

        return (
            <>
                <Helmet
                    title="Buy SITRA Certified product | Covid Supply"

                    link={[{ href: "http://covidsupply.in/all-product", rel: "canonical" }]}
                    meta={[
                        { "name": "description", "content": "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
                        { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall" },
                        { "name": "twitter:card", "content": "summary_large_image" },
                        { "name": "twitter:site", "content": "@supplycovid" },
                        { "name": "twitter:creator", "content": "@supplycovid" },
                        { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
                        { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
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
                    <div className="section text-center" style={{ paddingBottom: '115px' }}>
                        <div className="m-b-20 m-t-20">
                            <Button
                                className="btn-outline-info btn-round m-r-20"
                                onClick={this.productSelection.bind(this, "PPE Kit")}
                            > PPE Kit </Button>
                            <Button
                                className="btn-outline-info btn-round m-r-20"
                                onClick={this.productSelection.bind(this, "Coverall")}
                            > Coverall </Button>
                            <Button
                                className="btn-outline-info btn-round m-r-20"
                                onClick={this.productSelection.bind(this, "Mask")}
                            > Mask </Button>
                            <Button
                                className="btn-outline-info btn-round m-r-20"
                                onClick={this.productSelection.bind(this, "Gloves")}
                            > Gloves </Button>
                            <Button
                                className="btn-outline-info btn-round m-r-20"
                                onClick={this.productSelection.bind(this, "Safety Googles")}
                            > Safety Googles </Button>
                            <Button
                                className="btn-outline-info btn-round m-r-20"
                                onClick={this.productSelection.bind(this, "all")}
                            > All Product </Button>
                        </div>

                        <Row className="product-row">
                            {this.state.dataSet.map((i, index) =>
                                (
                                    <Col md="4" key={index}>
                                        <Link to={`/product/${i.name.replace(' ', '-')}`}>
                                            <div className="product-view info m-t-50 product-display">
                                                <div className="icon icon-info">
                                                    <img className="product-img" src={require("../../assets/img/products/" + i.name + ".jpeg")} alt={i.name} ></img>
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
                </div>
                <DemoFooter/>
            </>
        );
    }
}

export default ProductRegistration;
