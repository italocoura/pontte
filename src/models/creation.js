const mongoose = require('../database');


const CreationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    cpf: {
        type: String,
        required: true,
        select: false,
    },
    loanValue: {
        type: Number,
        required: true,
    },
    montlyIncome: {
        type: Number,
    },
    birthDate: {
        type: Date,
    },
    maritalStatus: {
        type: String,
    },
    address: {
        street: {
            type: String,
        },
        city:{
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: Number,
        }
    }

})

const Creation = mongoose.model('Creation', CreationSchema);

module.exports = Creation;