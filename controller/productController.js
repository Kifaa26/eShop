import express from "express";
import bodyParser from "body-parser";
import { products } from '../model/index.js';

const productRouter = express.Router()
productRouter.use(bodyParser.json())

productRouter.get('/', (req, res) => {
    products.fetchproducts(req, res)
})

productRouter.get('/:id', (req, res) => {
    products.fetchproduct(req, res)
})

productRouter.post('/register', (req, res) => {
    products.registerproduct(req, res)
})

productRouter.patch('/product/:id', (req, res) => {
    products.updateproduct(req, res)
})

productRouter.delete('/product/:id', (req, res) => {
    products.deleteproduct(req, res)
})

export {
    productRouter
}