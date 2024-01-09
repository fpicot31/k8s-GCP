const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oceane:oceane@cluster0.z5arjan.mongodb.net/gke-vue?retryWrites=true&w=majority').then(() => {
    console.log('Connected !')
}).catch(e => console.log(e));