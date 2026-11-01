/**
 * Lab 1: Node.js and Express Server
 * Backend Development Fundamentals
 * 
 * Student Details:
 * - Name: B. Vijay Nadha Reddy
 * - Registration Number: 252U1R1031
 * - Section: CSE (CORE) – 2A
 * - College: Aurora
 * - Course: Backend Development Fundamentals
 * - Faculty: Sai Siva Teja
 */

// Task 4: Express Server Setup
const express = require('express');
const app = express();

// Port configuration: Listen on environment variable PORT for Render deployment,
// or default to port 3000 for local development.
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads (if any)
app.use(express.json());

// ==========================================
// Task 5: Route Implementations
// ==========================================

/**
 * Route 1: GET "/"
 * Purpose: Display a welcome message.
 * Status: 200 OK
 */
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Backend Development Fundamentals - Lab 1: Node.js and Express Server!');
});

/**
 * Route 2: GET "/about"
 * Purpose: Return JSON containing student details.
 * - Name: B. Vijay Nadha Reddy
 * - Registration Number: 252U1R1031
 * - Section: CSE (CORE) – 2A
 * Status: 200 OK
 */
app.get('/about', (req, res) => {
    res.status(200).json({
        name: "B. Vijay Nadha Reddy",
        registrationNumber: "252U1R1031",
        section: "CSE (CORE) – 2A"
    });
});

/**
 * Route 3: GET "/time"
 * Purpose: Display the current date and time using new Date().
 * Status: 200 OK
 */
app.get('/time', (req, res) => {
    const now = new Date();
    res.status(200).json({
        message: "Current Date and Time",
        currentDateTime: now.toString(),
        isoString: now.toISOString()
    });
});

// ==========================================
// Task 6: 404 Route Handler
// ==========================================

/**
 * Catch-all handler for undefined routes.
 * Handles every unknown path that did not match preceding routes.
 * Status: 404 Not Found
 */
app.use((req, res) => {
    res.status(404).json({
        error: "404 Not Found",
        message: `The requested path '${req.originalUrl}' was not found on this server.`
    });
});

// ==========================================
// Start Express Server
// ==========================================
app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Task 4] Express server running on port ${PORT}`);
    console.log(`Access locally at: http://localhost:${PORT}/`);
});
