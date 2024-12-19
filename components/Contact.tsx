"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { isFrench } = useLanguage();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setShowSuccessModal(true);
          form.current?.reset();
          setTimeout(() => setShowSuccessModal(false), 3000);
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert(
            isFrench
              ? "Échec d'envoi, réessayez."
              : "Sending failed, try again."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center z-20 px-4 pb-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] mb-10 text-center"
      >
        {isFrench ? "Contactez-moi" : "Contact Me"}
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start max-w-6xl w-full gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="w-full md:w-1/2 mt-10 flex flex-col justify-start relative text-gray-300 space-y-4 text-center md:text-left"
        >
          <p className="text-lg leading-relaxed">
            {isFrench
              ? "Besoin d'aide ? Parlons de votre projet. Je m'engage à vous répondre dans les plus brefs délais."
              : "Need help ? Let's talk about it. I'm committed to answering your questions as soon as possible."}
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2 text-lg font-semibold text-[#7b92b4]">
            📍 {isFrench ? "Basé à Paris" : "Based in Paris"}
          </p>

          <div className="mt-6 p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
            <p className="text-gray-300 text-base leading-relaxed">
              {isFrench
                ? "Prêt à collaborer ? Je serais ravi d'entendre parler de votre projet. Ensemble, construisons quelque chose d'exceptionnel !"
                : "Ready to collaborate? I’d love to hear about your project. Let’s build something exceptional together!"}
            </p>
            <p className="mt-2 font-semibold text-[#7b92b4]">
              {isFrench
                ? "👉 Utilisez le formulaire pour commencer !"
                : "👉 Use the form to get started!"}
            </p>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="w-full mt-10 md:w-1/2 space-y-4 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
              {isFrench ? "Nom" : "Name"}
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              className="w-full px-4 py-2 bg-white/20 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
              placeholder={isFrench ? "Votre nom" : "Your name"}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              {isFrench ? "Email" : "Email"}
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              className="w-full px-4 py-2 bg-white/20 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
              placeholder={isFrench ? "Votre email" : "Your email"}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="message">
              {isFrench ? "Message" : "Message"}
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="w-full px-4 py-2 bg-white/20 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4] resize-none"
              placeholder={isFrench ? "Votre message" : "Your message"}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-semibold rounded-lg bg-[#0F172A] hover:bg-[#1e293b]  transition-colors duration-300 shadow-lg"
          >
            {isFrench ? "Envoyer le message" : "Send Message"}
          </button>
        </motion.form>
      </motion.div>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-2xl flex flex-col items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div
                className="text-green-500 text-6xl mb-4"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircleIcon fontSize="inherit" />
              </motion.div>
              <p className="text-lg font-semibold text-white text-center">
                {isFrench
                  ? "Message envoyé avec succès !"
                  : "Message successfully sent!"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
