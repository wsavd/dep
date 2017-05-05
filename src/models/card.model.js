import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
        title: {
                type: String
        },
        text: {
                type: String
        },
        manager: {
                type: String
        },
        developer: {
                type: String
        },
        createdAt: {
                type: Date,
                default: Date.now
        },
        boardId: {
                type: String
        },
        columnId: {
                type: String
        }
}, { versionKey: false });

export default mongoose.model('Card', cardSchema);