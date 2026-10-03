import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CharactersCard({ character }) {


  return (
    <Link to={`/character/${character.id}`}>
      <article className='group w-65 h-75'>
        <div className='w-full h-full border-DragoGray border-4 rounded-tr-4xl rounded-bl-4xl'>
          <div className='h-[65%] rounded-tr-3xl flex justify-center align-middle group-hover:bg-DragoAccentRed'>
            <img className='w-40 h-auto object-contain' src={character.image} alt={character.description} />
          </div>
          <div className='h-[35%] font-anton bg-DragoGray rounded-bl-3xl px-6 py-6 flex flex-col justify-center'>
            <h3 className='text-2xl font-bold text-DragoWhite group-hover:text-DragoAccentRed'>{character.name}</h3>
            <p className='text-lg text-gray-400'>ki: {character.ki}</p>
            <p className='text-lg text-gray-400'>{character.race}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}