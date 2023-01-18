const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('./models/index');
const allRoute = require('./routes/index.route');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/myapp', allRoute);
app.listen(PORT, () => { console.log(`server is running on ${PORT}`) });
