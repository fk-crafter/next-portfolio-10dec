"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import Lottie from "lottie-react";
import validateAnimation from "@/public/validate-animation.json"; // Assurez-vous d'utiliser le bon chemin du fichier JSON

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { isFrench } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setIsSent(true);
          setIsSubmitting(false);

          // Réinitialiser le formulaire après l'envoi
          form.current?.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          setIsSubmitting(false);
        }
      );
  };

  // Fermer la modal après un certain temps ou un clic
  const closeModal = () => {
    setIsSent(false);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-20 z-20 px-4"
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
          className="w-full md:w-1/2 flex flex-col justify-start relative text-gray-300 space-y-4 text-center md:text-left"
        >
          <p className="text-lg leading-relaxed">
            {isFrench
              ? "Pour me contacter, veuillez utiliser le formulaire ci-dessous. Je m'engage à vous répondre dans les plus brefs délais."
              : "To contact me, please use the form below. I am committed to responding to your inquiry as quickly as possible."}
          </p>
          <p className="flex items-center gap-2 text-lg font-semibold text-[#7b92b4]">
            📍 {isFrench ? "Basé à Paris" : "Based in Paris"}
          </p>
        </motion.div>

        <motion.form
          ref={form} // Référence au formulaire
          onSubmit={sendEmail}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="w-full md:w-1/2 space-y-4 bg-[#1a1c2b] p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
              {isFrench ? "Nom" : "Name"}
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              className="w-full px-4 py-2 bg-[#2b2d42] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
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
              className="w-full px-4 py-2 bg-[#2b2d42] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
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
              className="w-full px-4 py-2 bg-[#2b2d42] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
              placeholder={isFrench ? "Votre message" : "Your message"}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#7b92b4] text-white font-semibold rounded hover:bg-[#6f87ae] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isFrench ? "Envoyer le message" : "Send Message"}
          </button>
        </motion.form>
      </motion.div>

      {/* Modal */}
      {isSent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1a1c2b] p-8 rounded-lg text-center">
            <Lottie animationData={validateAnimation} loop={false} />
            <p className="text-white text-xl font-semibold mt-4">
              {isFrench
                ? "Message envoyé avec succès !"
                : "Message successfully sent!"}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-[#7b92b4] text-white rounded hover:bg-[#6f87ae] transition-all duration-300"
            >
              {isFrench ? "Fermer" : "Close"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
