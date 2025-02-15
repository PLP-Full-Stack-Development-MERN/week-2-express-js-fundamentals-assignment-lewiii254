const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use(logger); // Global middleware

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
// In this example, we have two route files userRoutes.js and productRoutes.js. We are using these route files in the main index.js file. We are using the app.use() method to use these route files in the main index.js file. This way, we can keep our code clean and organized. We can also use the global error handling middleware to handle errors in our application. This way, we can handle errors in a centralized way. This makes our code more maintainable and easier to debug.
