import mongoose from 'mongoose'

const dilivarySchema = new mongoose.Schema({
    dilivaryDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    location: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 1000
    },
}, {timestamps: true});

const Dilivary = mongoose.model('Dilivary', dilivarySchema);
export default Dilivary;