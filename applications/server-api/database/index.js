const mongoose = require('mongoose');
const mongodbUser = process.env.MONGODB_USER;
const mongodbPassword = encodeURIComponent(process.env.MONGODB_PASSWORD);
const mongodbhost = process.env.MONGODB_HOST;

const connectionString = `mongodb://${mongodbUser}:${mongodbPassword}@${mongodbhost}`;
//const connectionString = `mongodb+srv://oceane:oceane@cluster0.z5arjan.mongodb.net/gke-vue?retryWrites=true&w=majority`;

mongoose
    .connect(connectionString)
    .then(() => {
        console.log('Connected !');
    })
.catch((e) => console.log(e));