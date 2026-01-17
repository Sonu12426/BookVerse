import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js";

dotenv.config();

const URI = process.env.MongoDBURI;

const sampleBooks = [
    {
        name: "To Kill a Mockingbird",
        title: "To Kill a Mockingbird",
        price: 12.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg"
    },
    {
        name: "1984",
        title: "1984",
        price: 13.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/61NAx5pd6XL._SX327_BO1,204,203,200_.jpg"
    },
    {
        name: "The Great Gatsby",
        title: "The Great Gatsby", 
        price: 10.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/51XlnZhLbsL._SX327_BO1,204,203,200_.jpg"
    },
    {
        name: "Pride and Prejudice",
        title: "Pride and Prejudice",
        price: 11.99,
        category: "Romance",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wScUt0gQL._SX327_BO1,204,203,200_.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "The Catcher in the Rye",
        price: 14.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/53icJTTpVlL._SX327_BO1,204,203,200_.jpg"
    },
    {
        name: "JavaScript: The Good Parts",
        title: "JavaScript: The Good Parts",
        price: 29.99,
        category: "Programming",
        image: "https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._SX381_BO1,204,203,200_.jpg"
    },
    {
        name: "Clean Code",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        price: 39.99,
        category: "Programming",
        image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
    },
    {
        name: "The Alchemist",
        title: "The Alchemist",
        price: 15.99,
        category: "Philosophy",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX331_BO1,204,203,200_.jpg"
    }
];

async function seedBooks() {
    try {
        // Connect to MongoDB
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Clear existing books
        await Book.deleteMany({});
        console.log("Cleared existing books");

        // Insert sample books
        const insertedBooks = await Book.insertMany(sampleBooks);
        console.log(`Inserted ${insertedBooks.length} books`);

        console.log("Sample books added successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding books:", error);
        process.exit(1);
    }
}

seedBooks();