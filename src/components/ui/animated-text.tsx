
'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  words: string[];
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
  className?: string;
  style?: CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  words,
  typingDelay = 150,
  deletingDelay = 75,
  pauseDelay = 1000,
  className,
  style,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[currentWordIndex % words.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentWord.length) {
          setDisplayedText((prev) => prev + currentWord.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          // Word typed, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Word deleted, switch to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1));
          // charIndex is already 0, so displayedText will be cleared for the new word
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingDelay : typingDelay);

    return () => clearTimeout(timer);
  }, [charIndex, currentWordIndex, displayedText, isDeleting, words, typingDelay, deletingDelay, pauseDelay]);

  return (
    <span className={cn("inline-block", className)} style={style}>
      {displayedText}
      <span className="animate-blink inline-block w-[2px] h-[1em] bg-current ml-1 relative top-[0.1em] print:hidden"></span>
    </span>
  );
};

export default AnimatedText;
