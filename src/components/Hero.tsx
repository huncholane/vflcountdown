import React from "react";

interface Props {
  src: string;
  children?: React.ReactNode;
  alt?: string;
}

const Hero = (props: Props) => {
  return (
    <div className="relative h-screen w-screen">
      <video
        src={props.src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 h-full">{props?.children}</div>
    </div>
  );
};

export default Hero;
