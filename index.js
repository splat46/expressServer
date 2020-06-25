// Import server
const express = require('express');

// Create server
const app = express();

// App runs op server:
const port = 3000;

// Rendering a view
function render (message) {
    const document = `
        <!DOCTYPE html>
        <html lang="nl" dir="ltr">
            <head>
                <meta charset="utf-8">
                <title>Titel of the Page</title>
            </head>
            <body>
                <h1>${message}</h1>
            </body>
        </html>
    `;

    return document;
};

// Get homepage
app.get (
    '/', // Route homepage
    (request, response) => { 
        response.send(document)
    }
);

// Get about
app.get(
    '/about/:message', // declares a parameter named name
    (request, response) => { // handler callback
        const message = `Hi I'm ${request.params.message}`;
        const page = render(message);

        response.send(page)
    }
)

// Start listening
app.listen (
    port,   // Port where server listens
    () => console.log(`Listening on: ${port}`) // Callback runs when server starts
);