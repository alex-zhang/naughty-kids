const Nightmare = require('nightmare');
const nightmare = Nightmare({
	show: true,
	dock: true,
	switches: {
		'ignore-certificate-errors': true
	},
	openDevTools: {
		mode: 'detach'
	},
	width: 1200,
	height: 800
});

nightmare
	.cookies.clearAll()
	.goto('https://item.taobao.com/item.htm?id=546610905261')
	.useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36')
	.click('#J_LoginInfoHd a:first-child')
	.wait(1000)
	.click('#J_Quick2Static')
	.type('#TPL_username_1', '*****')
	.type('#TPL_password_1', '*****')
	.click('#J_SubmitStatic')
	.catch(function (error) {
		console.error('Search failed:', error);
	});
