require("babel-register")({
	presets: ["es2015", "react"]
});

const router = require("../src/route").default;
const Sitemap = require("react-router-sitemap").default;

const paramsConfig = {
	'/product/:productName': [
		{ productName: 'Mask' },
		{ productName: 'Coverall' },
		{ productName: 'Hand-Sanitizer' },
		{ productName: 'PPE-kit' },
		{ productName: 'Gloves' },
		{ productName: 'Bouffant-Caps' },
		{ productName: 'Eye-Goggles' },
		{ productName: 'Thermometer' },
		{ productName: 'Shoe-Cover' },
		{ productName: 'Testing-kit' }
	],
	'/request-form/:category/:product': [
		{ category: 'Mask' , product: ['3-ply-Mask', 'N-95']},
		{ category: 'Coverall' , product: ['Coverall-SS', 'Coverall-SMS', 'Coverall-SSMMS']},
		{ category: 'Hand-Sanitizer' , product: ['60-percent-Alcohol', '70-percent-Alcohol', '80-percent-Alcohol']},
		{ category: 'PPE-kit' , product: ['PPE-SS', 'PPE-SMS', 'PPE-SSMMS']},
		{ category: 'Gloves'  , product: ['Nitrile']},
		{ category: 'Bouffant-Caps' , product:['Bouffant-Cap']},
		{ category: 'Eye-Goggles'  , product:['Eye-Goggle']},
		{ category: 'Thermometer'  , product:['Infrared-Thermometer']},
		{ category: 'Shoe-Cover'  , product:['Shoe-Cover']},
		{ category: 'Testing-kit'  , product:['Testing-kit']}
	]
};

(
	new Sitemap(router)
		.applyParams(paramsConfig)
		.build('http://www.covidsupply.in')
		.save('./sitemap.xml')
);
