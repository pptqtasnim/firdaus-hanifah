"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-03-09T00:00:00");
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
    <div className="grid grid-cols-4 text-center gap-2">
      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-blue-200 flex flex-col">
        <p className="text-[10px]">Hari</p>
        <span className="text-[19px]"> {countdown.days}</span>
      </div>

      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-blue-200 flex flex-col">
        <p className="text-[10px]">Jam</p>
        <span className="text-[19px]">{countdown.hours}</span>
      </div>
      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-blue-200 flex flex-col">
        <p className="text-[10px]">Menit</p>
        <span className="text-[19px]">{countdown.minutes}</span>
      </div>
      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-blue-200 flex flex-col">
        <p className="text-[10px]">Detik</p>
        <span className="text-[19px]"> {countdown.seconds}</span>
      </div>
    </div>
  );
};

export default Countdown;
