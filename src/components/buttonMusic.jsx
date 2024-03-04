"use client";
import { useEffect, useRef } from "react";

const ButtonLagu = () => {
  const audioRef = useRef(null);
  useEffect(() => {
    const audioElement = audioRef.current;

    const playAudio = () => {
      if (audioElement.paused) {
        audioElement.play();
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      audioElement.pause();
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/Lemon.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};
export default ButtonLagu;
