import React, { useRef } from "react";
import TimeBlock from "./TimeBlock";

type Props = {
  children?: React.ReactNode;
};

const Card = (props: Props) => {
  const days = useRef(0);
  const hours = useRef(1);
  const mins = useRef(2);
  const secs = useRef(3);
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute mx-auto w-11/12 h-28 right-0 left-0 bg-slate-400 top-16 opacity-40 rounded-md shadow-sm"></div>
      <div className="absolute mx-auto w-11/12 h-28 right-0 left-0 top-16 flex px-1">
        <TimeBlock ref={days} unit="DAYS" />
        <TimeBlock ref={hours} unit="HOURS" />
        <TimeBlock ref={mins} unit="MINS" />
        <TimeBlock ref={secs} unit="SECS" />
      </div>
      ;
    </div>
  );
};

export default Card;
