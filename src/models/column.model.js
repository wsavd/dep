import mongoose from 'mongoose';

const columnSchema = mongoose.Schema({
        title: {
            type: String
        },
        boardId: {
            type: String
        }
}, { versionKey: false });

export default mongoose.model('Column', columnSchema);