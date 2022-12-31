import React, { useState } from "react";
import TimeBlock from "./TimeBlock";
import { schedule } from "../assets/schedule.json";
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
    return games[0];
  };

  const game = nextGame();

  return (
    <div className="h-screen w-screen relative">
      <div className="absolute mx-auto w-11/12 h-56 right-0 left-0 bg-slate-400 top-16 opacity-40 rounded-md shadow-sm"></div>
      <div className="absolute mx-auto w-11/12 h-28 right-0 left-0 top-16 flex px-1">
        <TimeBlock value={days} unit="DAYS" />
        <TimeBlock value={hours} unit="HOURS" />
        <TimeBlock value={minutes} unit="MINS" />
        <TimeBlock value={minutes} unit="SECS" />
      </div>
    </div>
  );
};

export default Card;
