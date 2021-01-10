const express = require('express');
const subscriberRoute = require('./routes/subscriber');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); 

// Routes
app.use('/', subscriberRoute);


app.listen(PORT,() => {
    console.log(`server is listening on PORT ${PORT}`);
})