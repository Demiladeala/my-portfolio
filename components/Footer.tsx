import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Oluwademilade Ala
        </p>
        <div className="flex flex-row gap-4 text-muted">
          <Link href="https://youtube.com/@alademilade?si=bBgMkD4UHSsJe_by">
            <AiFillYoutube size={22} className="hover:text-ink transition-colors" />
          </Link>
          <Link href="https://github.com/Demiladeala">
            <AiFillGithub size={22} className="hover:text-ink transition-colors" />
          </Link>
          <Link href="https://twitter.com/AlaDemjosh?">
            <AiFillTwitterCircle size={22} className="hover:text-ink transition-colors" />
          </Link>
          <Link href="mailto:demiladeala@gmail.com">
            <AiOutlineMail size={22} className="hover:text-ink transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/oluwademilade-ala-010715239">
            <BsLinkedin size={20} className="hover:text-ink transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/ala_demilade/">
            <AiFillInstagram size={22} className="hover:text-ink transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
