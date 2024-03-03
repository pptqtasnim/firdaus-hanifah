"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import calendar from "./calendar.json";
import time from "./time.json";
import location from "./location.json";

const Waktu = () => {
  return (
    <Player
      autoplay
      loop
      src={time}
      style={{
        height: "65px",
        width: "65px",
        margin: "0",
        padding: "0",
      }}
    ></Player>
  );
};
const Kalender = () => {
  return (
    <Player
      autoplay
      loop
      src={calendar}
      style={{
        height: "65px",
        width: "65px",
        margin: "0",
        padding: "0",
      }}
    ></Player>
  );
};
const Lokasi = () => {
  return (
    <Player
      autoplay
      loop
      src={location}
      style={{
        height: "65px",
        width: "65px",
        margin: "0",
        padding: "0",
      }}
    ></Player>
  );
};

export { Waktu, Kalender, Lokasi };
