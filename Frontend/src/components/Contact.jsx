import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="max-w-4xl mx-auto">
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Address:</h3>
                      <p>123 Book Street<br />Reading City, RC 12345<br />United States</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone:</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email:</h3>
                      <p>info@bookstore.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours:</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                         Saturday: 10:00 AM - 4:00 PM<br />
                         Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-600"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;