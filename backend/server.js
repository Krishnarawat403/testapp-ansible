const express = require('express');
const app = express();
const port = 5000; // Port on which your backend application will run

// Define your API routes here
app.get('/', (req, res) => {
  res.send('Hello, Welcome to becloudready!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
