const fs = require('fs')

const requestHandle = (req, res) => {
	const { url, method } = req

	if (req.url === '/home') {
		res.write(`
			<html lang="en">
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
		`)

		return res.end()
	}

	if (url === '/message' && method === 'POST') {
		const body = []

		req.on('data', chunk => {
			console.log('[NODE Server] chunk -', chunk)
			body.push(chunk)
		})

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split('=')[1]

			fs.writeFile('message.txt', message, err => {
				res.statusCode = 302
				res.setHeader('Location', '/')

				return res.end()
			})
		})
	}

	res.setHeader('Content-Type', 'text/html')
	res.write(`
		<html lang="en">
			<header>
				<title>First NodeJS title</title>
			</header>
			<body>
				<h1>Hello Node.js Server!</h1>
			</body>
		</html>
	`)
	res.end()
}

module.exports = requestHandle
