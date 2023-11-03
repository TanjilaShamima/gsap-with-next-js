"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  const handleButtonClick = () => {
    gsap.to("button", { x: 700 });
  };

  useEffect(() => {
    gsap.to("img", { x: 700, y:100, scale: 3, rotation: 360, duration: 10 });
  }, []);

  return (
    <main className="h-screen w-full bg-white flex flex-row items-center">
      <div>
        <button onClick={handleButtonClick}>Hello world</button>
        <img
          src="/images/1.jpg"
          className="h-[100px] w-[100pz] mt-[30px] rounded-[40px]"
        />
      </div>
    </main>
  );
}
