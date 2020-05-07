require("babel-register")({
	presets: ["es2015", "react"]
});

const router = require("../src/route").default;
const Sitemap = require("react-router-sitemap").default;

const paramsConfig = {
	'/product/:productName': [
		{ productName: 'Mask' },
		{ productName: 'Coverall' },
		{ productName: 'PPE-kit' },
		{ productName: 'Gloves' },
		{ productName: 'Safety-Goggles' }
	],
	'/request-form/:category/:product': [
		{ category: 'Mask' , product: ['KN95 Mask']},
		{ category: 'Coverall' , product: ['Coverall']},
		{ category: 'PPE-Kit' , product: ['PPE-Kit']},
		{ category: 'Gloves'  , product: ['Gloves']},
		{ category: 'Safety-Goggles'  , product:['Safety-Goggles']}
	]
};

(
	new Sitemap(router)
		.applyParams(paramsConfig)
		.build('http://www.covidsupply.in')
		.save('./sitemap.xml')
);
