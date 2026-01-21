import { useEffect, useState } from "react";

const ReactTypingEffect = ({ texts, speed = 100, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) setTimeout(() => {}, delay);
        else setIndex((prev) => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, delay]);

  return (
    <span className="text-[#8245ec]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default ReactTypingEffect;
