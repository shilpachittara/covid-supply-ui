
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
            item: {},
            category: this.props.match.params.category,
            product: this.props.match.params.product,
            showProd2:false,
            showProd3:false,
            showProd4:false,
            showProd5:false,
            showProd6:false,
            showProd7:false,
            showProd8:false,
            showProd9:false,
            showProd10:false,
            dataSet: [],
            count:0,
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

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        let item = this.state.item;
        item[name] =value;
        this.setState({item: item});
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

    submitOrder(){
        console.log("object", this.state)
    }

    addProdDiv = () =>{
        
        this.state.count++;
        console.log("click",this.state.count)
        switch (this.state.count){
            case 1:this.setState({
                showProd2:true
                

            })
            break;
            case 2:this.setState({
                showProd3:true

            })
            break;
            case 3:this.setState({
                showProd4:true

            })
            break;
            case 4:this.setState({
                showPro52:true

            })
            break;
            case 5:this.setState({
                showProd6:true

            })
            break;
            case 6:this.setState({
                showProd7:true

            })
            break;
            case 7:this.setState({
                showProd8:true

            })
            break;
            case 8:this.setState({
                showProd9:true

            })
            break;
            case 9:this.setState({
                showProd10:true

            })
            break;
         
        
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
        return (
            <>
                <ExamplesNavbar />
                <div className="section section-login">
                    <Container>

                        <Card className="card-register card-register-custom">
                            <h3 className="title mx-auto semi-bold m-b-40">Product Request Form</h3>
                            <div className="social-line text-center">

                            </div>
                            <Form className="register-form" onSubmit={this.submitOrder()}>
                                {/* category section dropdown type */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>

                                {/* items 2 */}
                                <div className={this.state.showProd2 ? "" :"d-none"}>
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>
                                {/* 3 */}
                                <div className={this.state.showProd3 ? "" :"d-none"}>
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                    </div>
                                {/* 4 */}
                                <div className={this.state.showProd4 ? "" :"d-none"}>
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>
                                {/* 5 */}
                                <div className={this.state.showProd5 ? "" :"d-none"}>
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>

                                {/* 6 */}
                                <div className={this.state.showProd6 ? "" :"d-none"}>
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>

                                                              {/* 7 */}
                                                              <div className={this.state.showProd7 ? "" :"d-none"}>
                                                              <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>

                                {/* 8 */}
                                <div className={this.state.showProd8 ? "" :"d-none"}>
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>
                                {/* 9 */}
                                <div className={this.state.showProd9 ? "" :"d-none"}>
                                       <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>

                                                                    {/*  10 */}
                                                                    <div className={this.state.showProd10 ? "" :"d-none"}>
                                                                    <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Category:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control" id="category" name="sellist1" onChange={this.changeProduct} required>
                                            <option>{this.state.category}</option>
                                            {categoryOptions}
                                        </select>

                                    </div>
                                </div>
                                {/* product section dropdown */}
                                <div className="row">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Product:</h5>
                                    </div>
                                    <div className="form-group col-sm-6">

                                        <select className="form-control " id="product" name="sellist1" required>
                                            <option>{this.state.product}</option>
                                            {productOptions}
                                        </select>


                                    </div>
                                </div>

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Quantity:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Quantity" className=""
                                            defaultValue=""
                                            id="quantity"
                                            type="number" 
                                            required
                                            onChange={this.handleInputChange}/>


                                    </div>
                                </div>
                                </div>

                                {/* technical specification text field + upload pdf field */}

                                
                                

                                <Button
                                    block
                                    className="btn-round register-submit-btn addmore-prod-btn"
                                    color="danger"
                                    type="button"
                                    onClick={this.addProdDiv}
                                >
                                    + Add more items
                                </Button>
                                <hr className="m-b-40 bdr-1"></hr>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Technical Specification:</h5>
                                    </div>
                                    <div className="col-sm-6 row">
                                        <div className="col-sm-7">
                                            <Input placeholder="Product Specification" className=""
                                                defaultValue=""
                                                id="technicalSpecification"
                                                type="text" 
                                                onChange={this.handleInputChange}
                                                required/>
                                        </div>
                                        <div className="col-sm-5">
                                            <Input placeholder="Upload PDF" className=""
                                                defaultValue=""
                                                id="technicalSpecification"
                                                type="file" 
                                                onChange={this.handleInputChange}
                                                required/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Organization Name:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Organization Name" className=""
                                            defaultValue=""
                                            id="organizationName"
                                            type="text"
                                            onChange={this.handleInputChange}
                                            required />


                                    </div>
                                </div> <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Organization Type:</h5>
                                    </div>
                                    <div className="col-sm-6 ">

                                        <select className="form-control m-b-20 " id="sel1" name="sellist1">
                                            <option>Select Option  </option>
                                            <option>Hospital</option>
                                            <option>Government</option>
                                            <option>Research bodies</option>
                                            <option>Other</option>
                                        </select>

                                        <Input placeholder="For other type here" className=""
                                            defaultValue=""
                                            id="organizationType"
                                            type="text" 
                                            onChange={this.handleInputChange}
                                            required/>


                                    </div>
                                </div>
                                {/* ADDRESSinput type text*/}

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Address:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Address Line 1" className=""
                                            defaultValue=""
                                            id="addressLine1"
                                            type="text"
                                            onChange={this.handleInputChange}
                                            required />


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
                                        <h5 className="semi-bold">State:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="State" className=""
                                            defaultValue=""
                                            id="state"
                                            type="text"
                                            onChange={this.handleInputChange}
                                            required />


                                    </div>
                                </div>
                                {/* pincode input type number*/}

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Pincode:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Pincode" className=""
                                            defaultValue=""
                                            id="pincode"
                                            type="number"
                                            onChange={this.handleInputChange}
                                            required />


                                    </div>
                                </div>

                                {/* Name input type text*/}

                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Name:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="Name" className=""
                                            defaultValue=""
                                            id="name"
                                            type="text" 
                                            onChange={this.handleInputChange}
                                            required/>


                                    </div>
                                </div>

                                {/* mobile no input type number */}
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Mobile No:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="10 Digit Mobile No" type="text" className=""
                                            defaultValue=""
                                            id="phoneNumber"
                                            onChange={this.handleInputChange}
                                            required
                                        />


                                    </div>
                                </div>
                                {/* EMAIL input type EMAIL */}
                                <div className="row m-b-20">
                                    <div className="m-r-20 col-sm-4 input-field-label">
                                        <h5 className="semi-bold">Email:</h5>
                                    </div>
                                    <div className="col-sm-6">

                                        <Input placeholder="email" className=""
                                            defaultValue=""
                                            id="email"
                                            type="email" 
                                            onChange={this.handleInputChange}
                                            required/>


                                    </div>
                                </div>

                                <Button
                                    block
                                    className="btn-round register-submit-btn addmore-prod-btn"
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
