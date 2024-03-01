"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-03-20T00:00:00");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        // Countdown selesai, lakukan sesuatu
        // Misalnya, tampilkan pesan bahwa countdown telah selesai
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Countdown Menuju 20 Maret 2024</h2>
      <p>Days: {countdown.days}</p>
      <p>Hours: {countdown.hours}</p>
      <p>Minutes: {countdown.minutes}</p>
      <p>Seconds: {countdown.seconds}</p>
    </div>
  );
};

export default Countdown;
