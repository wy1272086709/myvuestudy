const Mock = require('mockjs');
Mock.setup({
	timeout: '200-600'
});

let configArray = [];
const files = require.context('.', true, /\.js$/)
files.keys().forEach(key=> {
	if(key == './index.js') return;
	configArray = configArray.concat(files(key).default);
});

configArray.forEach((item) => {
	for(let [path, target] of Object.entries(item)) {
		let protocal = path.split('|');
		Mock.mock(new RegExp('^'+protocal[1]), protocal[0], target);
	}
});