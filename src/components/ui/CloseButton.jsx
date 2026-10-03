import React from 'react';

export default function CloseButton({onClick}) {
  return (
    <button onClick={onClick} className='absolute top-4 right-4 w-10 h-10 rounded-full bg-red-800 text-DragoWhite font-bold cursor-pointer hover:bg-DragoAccentRed'>
        X
    </button>
  );
}