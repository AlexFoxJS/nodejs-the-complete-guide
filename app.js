const http = require("http");

const server = http.createServer((req, res) => {
	console.log('[NODE Server ] - url:', req.url);

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
