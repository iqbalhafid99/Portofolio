"use client";

import { Cursor } from "motion-plus/react";

const CustomCursor = () => {
  return (
    <Cursor
      dotSize={8}
      ringSize={45}
      smoothness={0.18}
      dotClassName="bg-primary shadow-lg shadow-primary"
      ringClassName="border-primary"
      className="mix-blend-difference"
    />
  );
};

export default CustomCursor;
