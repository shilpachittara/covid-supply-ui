import React, { Component } from "react";
import { Container } from "reactstrap";

// reactstrap components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import { Helmet } from "react-helmet";

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryName: null,
            name: null,
            description: null,
            specification: null,
            productName: this.props.match.params.productName.replace('-', ' '),
            json: [{
                id: 1,
                category: "Mask",
                productDetail: [
                    {
                        id: "1b",
                        name: "KN95 Mask",
                        description: "Covidsupply mask has filtration system to fight bacteria and viruses. \nIt is made up of Non-Woven PP, Spunbonded and meltblown fabric. \nIt has bacteria filtration efficiency ≥ 96% for above 3μm & Particle Filtration Efficiency ≥ 95% for above 3μm. \nIt comes with nose pin for shapely fit, comfort and enhanced protection; its elastic ear loop makes it easy to wear and exert no pressure on the ears. \nPerfect for medical professionals, policeman, industrial workers, social worker who are fighting COVID19 or any other areas where protection might be required, such as hospital, airport, etc.",
                        specification: "Ear loop & tie-on"
                    }
                ]
            },
            {
                id: 4,
                category: "Coverall",
                productDetail: [{
                    id: "4a",
                    name: "Coverall",
                    description: "Covidsupply coverall/bodysuit is made up of SITRA Certified SMS(Spunbonded meltblown spunbondedn)/SSMMS(3 beams of Spunbond and 2 beams of Meltblown)/SS(2 beams of Spunond)/Non-Woven PP Fabric ranging from 50 to 90 GSM laminated fabric. \nIt is used to block the spread of the bacterial virus, and prevent the body from getting infected with bacteria, viruses,etc. \nIt has elastic cuff closure on sleeves and zipper on front. \nIt is seam sealed from corners, edges and alongside zipper which makes it impermeable. \nPerfect for healthcare workers, social and lab workers who are fighting COVID 19. \nWe use light colour fabric to detect possible contamination. \nIt is ergonomically designed which makes it comfortable and breathable. \nMoreover, it is wear-resistant and waterproof",
                    specification: "Protection With A Comfortable, Soft & Flexible Fabric.\nCoverall With Elasticated Hood, Inset Sleeves, Waist, Cuffs & Ankles. Styled & Sized For Generous Fit & Superior Freedom Of Movement. \nColour - White, Blue, Pink"
                }]
            },
            {
                id: 6,
                category: "Safety Googles",
                productDetail: [{
                    id: "6a",
                    name: "Safety Googles",
                    description: "Lens material of Covidsupply googles are made up of Polycarbonate and coating on lens surface makes it fog and scratch resistant. \nIt has transparent glasses with zero power, well fitting and covered with elastic band/adjustable holder from all sides",
                    specification: "Flexible frame to easily fit all face contours without too much pressure; Adjustable band to secure firmly so as not to become loose during clinical activity"
                }]
            },
            {
                id: 3,
                category: "PPE Kit",
                productDetail: [{
                    id: "3a",
                    name: "PPE Kit",
                    description: "Covidsupply PPE Kit comprises of 1 qty of Coverall suit, 1 qty of 3 Ply mask, 1 qty of eye glass, 1 pair of shoe cover, 1 pair of Nitrile gloves in sterilized packing. \nThis kit can be customized as per customer's need. This anti-virus kit is designed to combat pandemic COVID 19 or coronavirus. \nIt is ideal for healthcare professionals, lab researchers, hospitals, etc.",
                    specification: "Protection With A Comfortable, Soft & Flexible Fabric.\nCoverall With Elasticated Hood, Inset Sleeves, Waist, Cuffs & Ankles. Styled & Sized For Generous Fit & Superior Freedom Of Movement. \nColour - White, Blue, Pink"
                }]
            },
            {
                id: 2,
                category: "Gloves",
                productDetail: [{
                    id: "2a",
                    name: "Gloves",
                    description: "Nitrile Examination Gloves Box is a premium quality Safety Gloves which are sourced from the most reliable and official Safety Gloves vendors, chosen after performing detailed market surveys. \nIt is made up of powder free nitrile which features extraordinary strength and puncture resistance while maintaining tactile sensitivity. \nThis latex free gloves helps you protect from Bacteria, Viruses & Chemicals, and security Against Cross Contamination.",
                    specification: "Powderfree, 100% Latexfree"
                }]
            },

            ]
        }

    }

    componentWillMount() {
        this.state.json.forEach((item) => {
            let data = item.productDetail
            data.forEach((product) => {
                if (product.name === this.state.productName) {
                    this.setState({ name: product.name })
                    this.setState({ description: product.description })
                    this.setState({ specification: product.specification })
                    this.setState({ categoryName: item.category })
                }
            })
        })
    }


    render() {

        let pagetitle = "Buy SITRA Certified " + this.state.productName + " | Covid Supply"
        let pageUrl = "http://covidsupply.in/product/" + this.state.productName

        return (
            <>
                <Helmet
                    title={pagetitle}
                    link={[{ href: `${pageUrl}`, rel: "canonical" }]}
                    meta={[
                        { "name": "description", "content": "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
                        { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall" },
                        { "name": "twitter:card", "content": "summary_large_image" },
                        { "name": "twitter:site", "content": "@supplycovid" },
                        { "name": "twitter:creator", "content": "@supplycovid" },
                        { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
                        { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
                        { property: "og:type", content: "product" },
                        { property: "og:title", content: `${pagetitle}` },
                        { property: "og:description", content: "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices. Post your requirement and get quotation in 12 hours and product delivery in 48 hours from confirmation." },
                        { property: "og:url", content: `${pageUrl}` },
                        { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
                    ]}
                    script={[
                        {
                            type: "application/ld+json", innerHTML:
                                `{ "@context": "http://schema.org",
                                   "@type": "Product",
                                   "name": "Buy Medical supplies for covid-19",
                                   "url": "http://www.covidsupply.in/product",
                                   "logo": "http://covidsupply.in/coronavirus.png",
                                   "description": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies",
                                }`
                        }
                    ]} />
                <ExamplesNavbar />
                <div className="main">
                    <div className="section">

                        <Container>
                            <h2 className="text-center" >{this.state.categoryName}</h2>
                            <div className="product-container">
                                <div className="left-column">
                                    <img src={require("../../assets/img/products/" + this.state.productName + ".jpeg")} alt={this.state.productName} />
                                </div>
                                <div className="right-column">
                                    <div className="product-description">
                                        <h5>{this.state.name}</h5>
                                        <h6>Product description</h6>
                                        {this.state.description.split("\n").map((i, key) => {
                                            return <p key={key}>{i}</p>;
                                        })}
                                        </div>
                                    <div className="product-description">
                                        <h6>Product Specification</h6>
                                        {this.state.specification.split("\n").map((i, key) => {
                                            return <p key={key}>{i}</p>;
                                        })}
                                    </div>

                                    <div className="product-price">
                                        <a href={`/request-form/${this.state.categoryName.replace(/\s/g, '-')}/${this.state.productName.replace(/\s/g, '-')}`} className="cart-btn">Place Order</a>
                                    </div>
                                </div>
                            </div>

                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductDetail;
