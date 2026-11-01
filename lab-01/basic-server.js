/**
 * Lab 1: Node.js and Express Server
 * Task 3: Basic Node.js Server using Built-in HTTP Module
 * 
 * Student Details:
 * Name: B. Vijay Nadha Reddy
 * Registration Number: 252U1R1031
 * Section: CSE (CORE) – 2A
 * College: Aurora
 * Course: Backend Development Fundamentals
 * Faculty: Sai Siva Teja
 */

// Step 1: Import the built-in HTTP module
const http = require('http');

// Step 2: Define the port number (Port 3000 as per Task 3)
const PORT = 3000;

// Step 3: Create the HTTP server using http.createServer()
// The callback function handles incoming HTTP requests:
// - req: The IncomingMessage object containing request details (headers, URL, method, etc.)
// - res: The ServerResponse object used to construct and send the HTTP response
const server = http.createServer((req, res) => {
    // Set the HTTP response status code to 200 (OK)
    // and specify the content type header as plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Respond with the required text "Hello"
    res.end('Hello');
});

// Step 4: Bind and listen for connections on port 3000
server.listen(PORT, () => {
    console.log(`[Task 3] Basic HTTP server is running at http://localhost:${PORT}/`);
    console.log(`Press Ctrl+C to stop the server.`);
});
