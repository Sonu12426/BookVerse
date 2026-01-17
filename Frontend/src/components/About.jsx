import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">About BookStore</h1>
            <div className="max-w-4xl mx-auto text-left space-y-6">
              <p className="text-lg">
                Welcome to BookStore, your premier destination for discovering and purchasing 
                books across all genres. We are passionate about connecting readers with the 
                stories that inspire, educate, and entertain.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="text-lg">
                Our mission is to make quality books accessible to everyone. Whether you're 
                looking for the latest bestsellers, classic literature, educational materials, 
                or programming guides, we have something for every reader.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Wide selection of books across multiple categories</li>
                <li>Competitive pricing on all titles</li>
                <li>Easy-to-use online platform</li>
                <li>Secure payment processing</li>
                <li>Fast and reliable delivery</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
              <p className="text-lg">
                Founded with a love for literature and learning, BookStore has grown from 
                a small local bookshop to a comprehensive online platform. We believe that 
                books have the power to transform lives, and we're committed to making that 
                transformation accessible to readers everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;