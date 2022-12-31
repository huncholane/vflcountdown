import React, { useState } from "react";
import TimeBlock from "./TimeBlock";
import { schedule } from "../assets/schedule.json";
import convertMiliseconds from "./convertInterval";
const { games } = schedule;

type Props = {
  children?: React.ReactNode;
};

const Card = (props: Props) => {
  console.log(games);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const nextGame = () => {
    return games[1];
  };

  const game = nextGame();
  const date = new Date(game.date);
  const time = game.time;

  setInterval(() => {
    const now = new Date();
    const ms = date.getTime() - now.getTime();
    const diff = convertMiliseconds(ms);
    setDays(diff.d);
    setHours(diff.h);
    setMinutes(diff.m);
    setSeconds(diff.s);
  }, 1000);

  return (
    <div className="h-screen w-screen">
      <div className="absolute px-1 mx-auto w-11/12 right-0 left-0 bg-slate-400 top-16 bg-opacity-40 rounded-md shadow-sm">
        <div className="flex">
          <TimeBlock value={days} unit="DAYS" />
          <TimeBlock value={hours} unit="HOURS" />
          <TimeBlock value={minutes} unit="MINS" />
          <TimeBlock value={seconds} unit="SECS" />
        </div>
        <div className="flex justify-between w-full">
          <img
            src={game.opponent.image.fullpath}
            alt={game.opponent.title}
            className="w-16"
          />
          <div>
            <div className="text-center text-xl">
              {game.at_vs}{" "}
              <span className="text-lg">{game.opponent.title}</span>
            </div>
            <div className="text-center text-md">
              {date.toLocaleDateString() + " - " + time}
            </div>
            <div className="text-center text-lg">{game.facility?.title}</div>
          </div>
          <img src="/favicon.ico" alt="Tennessee" className="w-16" />
        </div>
      </div>
    </div>
  );
};

export default Card;
