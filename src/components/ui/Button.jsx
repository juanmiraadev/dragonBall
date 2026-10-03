import React from 'react';

export default function Button({onClick, text}) {
  return (
    <button onClick={onClick} className='w-fit px-20 py-4 bg-DragoOrange text-2xl text-DragoWhite rounded-2xl hover:scale-110 hover:bg-DragoGray'>
        {text}
    </button>
  );
}