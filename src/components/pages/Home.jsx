
import { useState } from 'react'
import Button from '../ui/Button'
import Login from './Login';

export default function Home({handleLogin}) {

    const [openLogin, setOpenLogin] = useState(false);

    return (
        <div className='absolute w-full min-h-dvh inset-0 z-10 flex bg-DragoWhite'>
            <div className='w-[65%] h-auto flex flex-col  justify-between items-center m-40'>
                <div className='flex flex-col items-center gap-2 font-bold text-6xl text-DragoGray'>
                    <h3>Get your favourite</h3>
                    <h3>Anime at your home</h3>
                </div>
                <Button onClick={() => setOpenLogin(true)} text={"Get started"}/>
                <img className='absolute w-75 top-20 right-90' src={`${import.meta.env.BASE_URL}assets/Goku.png`} alt="goku img" />
            </div>
            {openLogin && (
                <Login handleLogin={handleLogin} onClose={() => setOpenLogin(false)}/>
            )}
            <div className='w-[35%] h-dvh bg-DragoOrange'></div>
        </div>
  )
}
