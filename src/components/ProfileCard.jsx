import React from 'react';

const ProfileCard = ({ avatarUrl, name, designation }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto -mt-16 md:-mt-24">
      <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl ring-1 ring-white/10 p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-blue-500 blur opacity-30"></div>
            <img
              src={avatarUrl}
              alt={name}
              className="relative h-28 w-28 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-slate-800"
            />
          </div>
          <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">{name}</h2>
          <p className="mt-1 text-slate-300">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
