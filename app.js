const http = require("http");

const server = http.createServer((req, res) => {
	const { url, method, headers } = req;

	console.log(url, method, headers);
	// process.exit()

	res.setHeader('Content-Type', 'text/html');
	res.write(`
		<html>
			<header>
				<title>First NodeJS title</title>
			</header>
			<body>
				<h1>Hello Node.js Server!</h1>
			</body>
		</html>
	`);
	res.end();
});

server.listen(3000);
