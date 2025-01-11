import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlowingHeading from "../glowingHeading";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      toast.error("Form reference is not available.");
      return;
    }

    emailjs
      .sendForm(
        "service_rfo9kqd",
        "template_kz3typh",
        form.current,
        "E_zKboqizcYlcXquF"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          if (form.current) {
            form.current.reset();
          }
        },
        () => {
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };


  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center p-6 min-h-screen"
    >
      {isMounted && (
        <motion.div
          className="max-w-lg w-full bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-8 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={formVariants}
          transition={{ duration: 0.8 }}
        >
          <GlowingHeading title="Get In Touch" />
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div variants={fieldVariants}>
              <label htmlFor="sender_name" className="block text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                id="sender_name"
                name="sender_name"
                required
                className="w-full p-3 text-gray-100 rounded-md bg-gray-500 focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label htmlFor="subject" className="block text-gray-200">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 text-gray-100 rounded-md bg-gray-500 focus:ring-2 focus:ring-purple-500"
                placeholder="Subject"
              />
            </motion.div>
            <motion.div variants={fieldVariants}>
              <label htmlFor="message" className="block text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-3 text-gray-100 rounded-md bg-gray-500 focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
}
