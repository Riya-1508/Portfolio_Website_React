import React from 'react'
import Navbar from "../components/navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT" text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact
