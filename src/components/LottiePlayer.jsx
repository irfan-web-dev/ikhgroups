"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottiePlayer({ src }) {
  return (
    <DotLottieReact
      src={src}
      background="transparent"
      speed="1"
      style={{ width: 500, height: 300 }}
      loop
      autoplay
    />
  );
}
