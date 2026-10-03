import React from 'react';

export default function Hero() {
  return (
    <header className='w-full flex justify-center items-center'>
        <img className='w-80 lg:w-96' src={`${import.meta.env.BASE_URL}assets/Logo.png`} alt="logo" />
    </header>
  );
}