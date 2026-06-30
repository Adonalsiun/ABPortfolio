"use client";

import { useState, useEffect } from "react";

const TYPING_MS  = 60;
const DELETE_MS  = 30;
const PAUSE_FULL = 2000;
const PAUSE_NEXT = 500;

export function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex] ?? "";
  const displayText = currentWord.slice(0, charIndex);

  useEffect(() => {
    // Full word shown — pause, then start deleting
    if (!isDeleting && charIndex === currentWord.length) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_FULL);
      return () => clearTimeout(t);
    }

    // Word fully deleted — move to next, pause
    if (isDeleting && charIndex === 0) {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, PAUSE_NEXT);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => setCharIndex((c) => (isDeleting ? c - 1 : c + 1)),
      isDeleting ? DELETE_MS : TYPING_MS,
    );
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, currentWord, words]);

  return { displayText, isDeleting };
}
