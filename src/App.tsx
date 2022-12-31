import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import Card from "./components/Card";
import video from "./assets/goalpost.mp4";

function App() {
  return (
    <div>
      <Hero src={video}>
        <Card>hello</Card>
      </Hero>
    </div>
  );
}

export default App;
