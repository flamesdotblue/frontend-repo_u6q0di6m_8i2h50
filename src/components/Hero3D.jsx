import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top and bottom subtle gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/70 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>

      {/* Centered heading */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="px-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight drop-shadow-sm">
            Your Holographic Digital Card
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            A modern, vibrant profile you can link to your NFC card. Tap, connect, and grow your network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
