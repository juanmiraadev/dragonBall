import React from 'react';

export default function Input({label, type, placeholder, value, onChange, error}) {
  return (
    <div className='flex flex-col gap-1 font-bold font-anton text-2xl'>
        <label className=''>{label}</label>
        {error && (
            <p className='text-sm text-DragoAccentRed'>{error}</p>
        )}
        <input className={`focus:text-DragoGray px-4 py-2 border-2 bg-gray-200 rounded-sm ${error ? "border-DragoAccentRed" : "border-transparent bg-DragoWhite"}`} type={type} placeholder={placeholder} value={value} onChange={onChange} error={error}/>
    </div>
  );
}