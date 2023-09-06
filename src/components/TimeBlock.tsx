import React from "react";

type Props = {
  unit: string;
  value: number;
};

const TimeBlock = (props: Props) => {
  return (
    <div className="w-full my-2 mx-1 bg-slate-400 opacity-90 text-center flex flex-col justify-center rounded-sm">
      <div className="text-orange-500 font-mono font-bold text-4xl">
        {props.value}
      </div>
      <div className="text-white font-mono text-xl">{props.unit}</div>
    </div>
  );
};

export default TimeBlock;
