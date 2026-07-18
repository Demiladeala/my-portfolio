"use client";
import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:demiladeala@gmail.com?subject=Let's Connect&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`;
  };

  return (
    <div className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed mt-4 mb-10">
            I&apos;m open to full-time roles, collaborations, or freelance
            projects. Tell me what you&apos;re building — I reply within 24
            hours.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col space-y-4 text-left"
          >
            <input
              {...register("name")}
              placeholder="Your name"
              type="text"
              required
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              required
              className="contactInput"
            />
            <textarea
              {...register("message")}
              placeholder="Your message…"
              rows={5}
              required
              className="resize-none contactInput"
            />
            <button
              type="submit"
              className="py-3.5 px-10 bg-accent text-white font-medium text-base rounded-lg hover:bg-accent-dark transition-colors"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
