const mongoose = require('mongoose'); // Correctly require mongoose

// Establish a connection to MongoDB
mongoose.connect("mongodb+srv://rajkumarpogula22:Raju12345@in-aws.59ion.mongodb.net/max-store?retryWrites=true&w=majority&appName=in-AWS", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
