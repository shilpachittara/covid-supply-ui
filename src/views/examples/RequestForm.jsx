
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
import ObjectCreation from "shared/ObjectCreation";
import SubmitOrderService from "services/SubmitOrderService";
import Validator from "shared/Validator";
import { Helmet } from "react-helmet";

// core components
class RequestForm extends Component {

    constructor(props) {
        super(props)
        this.object = new ObjectCreation()
        this.service = new SubmitOrderService()
        this.validate = new Validator()
        this.moreProduct = this.moreProduct.bind(this)
        this.delete = this.delete.bind(this)
        this.state = {
            productDiv: [],
            item: {},
            category: this.props.match.params.category.split('-').join(' '),
            product: this.props.match.params.product.split('-').join(' '),
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
    componentDidMount() {
        this.state.json.forEach((item) => {
            if (item.category === this.state.category) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })

        let item = this.state.item;
        item["productName"] = this.state.product;
        this.setState({ item: item });
        item["category"] = this.state.category;
        this.setState({ item: item })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        let item = this.state.item;
        item[name] = value;
        this.setState({ item: item });
    }

    handleInputChangeForProduct = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        let item = this.state.item;
        item[name] = value;
        this.setState({ item: item });
        if (name === "category") {
            this.setState({ category: "Select Option" });
            this.setState({ product: "Select Option" });
            let selectedValue = event.target.value;
            this.state.json.forEach((item) => {
                if (item.category === selectedValue) {
                    let data = item.productDetail
                    this.setState({ dataSet: data })
                }
            })
        }
    }

    /*changeProduct = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        let item = this.state.item;
        item[name] = value;
        this.setState({ item: item });
        this.setState({ category: "Select Option" });
        this.setState({ product: "Select Option" });
        let selectedValue = event.target.value;

        this.state.json.forEach((item) => {
            if (item.category === selectedValue) {
                let data = item.productDetail
                this.setState({ dataSet: data })
            }
        })
    }*/
    moreProduct() {
        if ((this.state.item.category !== "Select Option" || !this.state.item.category)
            && (this.state.item.productName !== "Select Option" || !this.state.item.productName) && this.state.item.quantity) {
            let data = []
            if (this.state.item.category && this.state.item.productName) {
                data = {
                    "category": this.state.item.category,
                    "productName": this.state.item.productName,
                    "quantity": this.state.item.quantity
                }
                this.state.productDiv.push(data)
            }
            this.setState({ category: "Select Option" });
            this.setState({ product: "Select Option" });
            let item = this.state.item;
            item["productName"] = null;
            this.setState({ item: item });
            item["category"] = null;
            this.setState({ item: item })
        }
    }

    delete(category, product, quantity) {
        const items = this.state.productDiv.filter(item => (item.productName !== product));
        this.setState({ productDiv: items });

    }

    submitOrder = (event) => {
        event.preventDefault()
        if (this.validate.validateOrder(this.state.item, this.state.productDiv)) {
            let data = []
            if (this.state.item.category !== null && this.state.item.productName !== null
                && this.state.item.quantity !== null) {
                data = {
                    "category": this.state.item.category,
                    "productName": this.state.item.productName,
                    "quantity": this.state.item.quantity
                }
                this.state.productDiv.push(data)
            }
            let requestObject = this.object.orderObject(this.state.item, this.state.productDiv)
            this.service.createOrder(requestObject)

        }

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

        let pagetitle = "Buy SITRA Certified " + this.state.category + " " + this.state.product + " | Covid Supply"
        let pageUrl = "http://covidsupply.in/request-form/" + this.state.category.replace(/\s/g, '-') + "/" + this.state.product.replace(/\s/g, '-')

        return (
            <>

                <Helmet
                    title={pagetitle}
                    link={[{ href: `${pageUrl}`, rel: "canonical" }]}
                    meta={[
                        { "name": "description", "content": "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
                        { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall"},
                        { "name": "twitter:card", "content": "summary_large_image"},
                        { "name": "twitter:site", "content": "@supplycovid"},
                        { "name": "twitter:creator", "content": "@supplycovid"},
                        { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
                        { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
                        { property: "og:description", content: "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
                        { property: "og:type", content: "product" },
                        { property: "og:title", content: `${pagetitle}` },
                        { property: "og:description", content: "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation." },
                        { property: "og:url", content: `${pageUrl}` },
                        { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
                    ]}
                    script={[
                        {
                            type: "application/ld+json", innerHTML:
                                `{ "@context": "http://schema.org" ,
                                   "@type": "Organization",
                                   "name": "CovidSupply",
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
                <div className="section section-login">
                    <Container>

                        <Card className="card-register card-register-custom request-form-containt">
                            <h3 className="title mx-auto semi-bold m-b-40" style={{ color: 'white' }}>Tell us about your need</h3>
                            <div className="social-line text-center">

                            </div>
                            <Form className="register-form" onSubmit={this.submitOrder}>
                                {/* category section dropdown type  to copy -this.productDiv*/}

                                {this.state.productDiv.map((i, index) =>
                                    (
                                        <div key={index} className="added-prod">
                                            <div className="row">
                                                <div className="col-sm-7">

                                                    <div className="m-r-20 ">
                                                        <h5>Category :  {i.category}</h5>
                                                    </div>
                                                    <div className="m-r-20 ">
                                                        <h5>Product :  {i.productName}</h5>
                                                    </div>
                                                    <div className="m-r-20 ">
                                                        <h5>Quantity :  {i.quantity}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <Button className="btn-round mr-100" color="danger" onClick={this.delete.bind(this, i.category, i.productName, i.quantity)}>
                                                        Remove</Button>
                                                </div>
                                            </div>

                                            <div>
                                                <hr className="m-b-40 bdr-1"></hr>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="category" onChange={this.handleInputChangeForProduct} >
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown  to be change line-233*/}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="productName" name="productName"
                                            onChange={this.handleInputChangeForProduct}>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number"
                                            onChange={this.handleInputChangeForProduct} />


                                    </div>
                                </div>
                                {/* technical specification text field + upload pdf field */}

                                <Button
                                    block
                                    className="btn-round register-submit-btn addmore-prod-btn"
                                    color="success"
                                    type="button"
                                    onClick={this.moreProduct}
                                >
                                    + Add more items
                                </Button>
                                <hr className="m-b-40 bdr-1"></hr>
                                <h3 className="title mx-auto semi-bold m-b-40 text-center" style={{ color: 'white' }}>Your Details</h3>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Technical Specification: </h5>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <Input placeholder="Product Specification" className=""
                                            defaultValue=""
                                            id="technicalSpecification"
                                            type="text"
                                            onChange={this.handleInputChange} />
                                        {/*<div className="col-sm-7">
                                            <Input placeholder="Product Specification" className=""
                                                defaultValue=""
                                                id="technicalSpecification"
                                                type="text"
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-sm-5">
                                            <Input placeholder="Upload PDF" className=""
                                                defaultValue=""
                                                id="technicalSpecification"
                                                type="file"
                                                onChange={this.handleInputChange} />
                                    </div>*/}
                                    </div>

                                </div>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Organization Name: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Organization Name" className=""
                                            defaultValue=""
                                            id="organizationName"
                                            type="text"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div> <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Organization Type: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6 ">

                                        {
                                        }
                                        <select className="form-control m-b-20 " id="organizationType" name="organizationType" onChange={this.handleInputChange}>
                                            <option>Select Option  </option>
                                            <option>Government</option>
                                            <option>Hospital</option>
                                            <option>Research bodies</option>
                                            <option>etailer</option>
                                            <option>Wholesale</option>
                                            <option>Other</option>
                                        </select>

                                        <Input placeholder="For other type here" className=""
                                            defaultValue=""
                                            id="organizationType"
                                            type="text"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>
                                {/* ADDRESSinput type text*/}

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Address: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Address Line 1" className=""
                                            defaultValue=""
                                            id="addressLine1"
                                            type="text"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        {/* <h5>Address:</h5> */}
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Address Line 2" className=""
                                            defaultValue=""
                                            id="addressLine2"
                                            onChange={this.handleInputChange}
                                            type="text" />

                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">State: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="State" className=""
                                            defaultValue=""
                                            id="state"
                                            type="text"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">City: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="City" className=""
                                            defaultValue=""
                                            id="city"
                                            type="text"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>
                                {/* pincode input type number*/}

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Pincode: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Pincode" className=""
                                            defaultValue=""
                                            id="pinCode"
                                            type="number"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>

                                {/* Name input type text*/}

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Name: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Name" className=""
                                            defaultValue=""
                                            id="name"
                                            type="text"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>

                                {/* mobile no input type number */}
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Mobile No: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="10 Digit Mobile No" type="text" className=""
                                            defaultValue=""
                                            id="phoneNumber"
                                            onChange={this.handleInputChange}
                                        />


                                    </div>
                                </div>
                                {/* EMAIL input type EMAIL */}
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Email: <span style={{color:"red"}}>* </span> </h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="email" className=""
                                            defaultValue=""
                                            id="email"
                                            type="email"
                                            onChange={this.handleInputChange} />


                                    </div>
                                </div>

                                <Button
                                    block
                                    className="btn-round register-submit-btn addmore-prod-btn"
                                    color="danger"
                                    type="submit"
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
