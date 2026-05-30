import { useState, useEffect, useRef, startTransition } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorColor?: string;
}

export const TypewriterEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1200,
  className = "",
  cursorColor = "currentColor",
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // Typing / deleting logic
  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    let delay: number;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        delay = typingSpeed;
        const timeout = setTimeout(() => {
          startTransition(() => {
            setDisplayText(currentWord.slice(0, charIndex + 1));
            setCharIndex((i) => i + 1);
          });
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing — pause then start deleting
        const timeout = setTimeout(() => {
          startTransition(() => setIsDeleting(true));
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        delay = deletingSpeed;
        const timeout = setTimeout(() => {
          startTransition(() => {
            setDisplayText(currentWord.slice(0, charIndex - 1));
            setCharIndex((i) => i - 1);
          });
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting — move to next word
        startTransition(() => {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        });
      }
    }
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} aria-label={words[wordIndex % words.length]}>
      {displayText}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.85em",
          backgroundColor: cursorColor,
          marginLeft: "2px",
          verticalAlign: "middle",
          opacity: cursorVisible ? 1 : 0,
          transition: "opacity 0.1s",
          borderRadius: "1px",
        }}
        aria-hidden="true"
      />
    </span>
  );
};
