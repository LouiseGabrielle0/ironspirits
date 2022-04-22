const res = require('express/lib/response')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type :Number,
        min: 1000
    },
    hasStock: {
        type: Boolean,
        default: true
    },
    categories: {
        type: [String],
    enum: ["watercolour", "oil", "print", "blackandwhite", "colour", "limited edition"]},
    imgScr: {
        type: String,
        default: 'images/placeholder.pgn'
}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product; //export to the outside would - whatever we have in the variable product