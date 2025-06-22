import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <motion.div 
      id="contact"
      className="border-b border-neutral-900 pb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
    >
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-purple-400 transition-colors">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;