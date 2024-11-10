const express = require("express")

const BookModel = require("../models/books")

const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {

    BookModel.find().then((books) => {
        res.send(books)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })   
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    const bookData = req.body
    console.log(bookData)
    try {
        // Create a new book instance
        const book = new BookModel(bookData)
        // Save the book to MongoDB
        const newBook = await book.save()
        res.send(newBook)
    } catch (error) {
        res.status(500).send({message: err.message})
    } 
})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    BookModel.findByIdAndUpdate(req.params.bookid, req.body, {new: true})
    .then((book) => {
        if(book) {
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    BookModel.findByIdAndDelete(req.params.bookid).then((book) => {
        if(book) {
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes