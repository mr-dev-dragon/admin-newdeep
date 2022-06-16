const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;
const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

