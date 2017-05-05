import mongoose from 'mongoose';

const boardSchema = mongoose.Schema({
        title: {
            type: String
        }
}, { versionKey: false });

export default mongoose.model('Board', boardSchema);