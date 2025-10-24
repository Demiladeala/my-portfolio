"use client";
import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const contactHeader: string = "Get In Touch />";

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:demiladeala@gmail.com?subject=Let's Connect&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`;
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 sm:px-12 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Section Header */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-gray-100 font-extrabold text-2xl sm:text-3xl mb-10"
      >
        {contactHeader}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-xl mx-auto flex flex-col items-center text-center text-gray-200"
      >
        <p className="text-base sm:text-lg mb-10 text-gray-400 leading-relaxed">
          I’m open to full-time roles, collaborations, or exciting freelance
          projects. Let’s create something impactful together — feel free to
          reach out!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col space-y-4"
        >
          <input
            {...register("name")}
            placeholder="Your Name"
            type="text"
            required
            className="contactInput rounded-md bg-gray-800/50 border border-gray-700/50 focus:border-amber-400 focus:ring-amber-400/20 text-gray-100 placeholder-gray-500 transition-all duration-300"
          />
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            required
            className="contactInput rounded-md bg-gray-800/50 border border-gray-700/50 focus:border-amber-400 focus:ring-amber-400/20 text-gray-100 placeholder-gray-500 transition-all duration-300"
          />
          <textarea
            {...register("message")}
            placeholder="Your Message..."
            rows={5}
            required
            className="resize-none contactInput rounded-md bg-gray-800/50 border border-gray-700/50 focus:border-amber-400 focus:ring-amber-400/20 text-gray-100 placeholder-gray-500 transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="py-3 px-10 bg-amber-400 text-black font-bold text-lg rounded-md transition-all duration-300 hover:bg-amber-300 focus:ring-4 focus:ring-amber-400/40"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
