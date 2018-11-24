const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	console.log('[NODE Server] url -', url);

	if (req.url === '/home') {
		res.write(`
			<html>
				<header>
					<title>NodeJS</title>
				</header>
				<body>
					<form action="/message" method="POST">
						<input type="text" name="message">
						<button type="submit">Submit</button>
					</form>
				</body>
			</html>
		`);

		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];

		req.on('data', chunk => {
			console.log('[NODE Server] chunk -', chunk);
			body.push(chunk);
		});

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];

			fs.writeFileSync('message.txt', message);

			res.statusCode = 302;
			res.setHeader('Location', '/');

			return res.end();
		});

	}

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
