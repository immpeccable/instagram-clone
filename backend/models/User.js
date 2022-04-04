let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    e_mail: {type: String, trim: true, lowercase: true, required: 'Email adress is required', match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
    full_name: {type: String, required: true},
    user_name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
})


module.exports = mongoose.model('User', UserSchema);