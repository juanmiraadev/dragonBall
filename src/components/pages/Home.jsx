
import { useState } from 'react'
import Button from '../ui/Button'
import Login from './Login';

export default function Home({handleLogin}) {

    const [openLogin, setOpenLogin] = useState(false);

    return (
        <div className='absolute w-full min-h-dvh inset-0 z-10 flex bg-DragoWhite overflow-x-clip no-gutter'>
            <div className='relative w-full flex flex-col justify-center items-center gap-8 px-4 py-10 [&>button]:bg-DragoBlue home:static home:w-[65%] home:h-auto home:justify-between home:gap-0 home:p-0 home:m-40'>
                <div className='relative flex justify-center home:contents'>
                    <img className='h-[60dvh] max-h-140 w-auto home:absolute home:h-auto home:max-h-none home:w-75 home:top-20 home:right-90' src={`${import.meta.env.BASE_URL}assets/Goku.png`} alt="goku img" />
                    <div className='absolute top-[40%] left-1/2 -translate-x-1/2 w-max isolate flex flex-col items-center gap-1 font-bold text-3xl sm:text-5xl text-DragoGray text-center before:absolute before:-inset-x-16 before:-inset-y-14 before:-z-10 before:-rotate-6 before:bg-DragoWhite/70 before:backdrop-blur-md before:mask-radial-closest-side before:mask-radial-from-35% home:static home:translate-x-0 home:w-auto home:gap-2 home:text-6xl home:before:hidden'>
                        <h3>Get your favourite</h3>
                        <h3>Anime at your home</h3>
                    </div>
                </div>
                <Button onClick={() => setOpenLogin(true)} text={"Get started"}/>
            </div>
            {openLogin && (
                <Login handleLogin={handleLogin} onClose={() => setOpenLogin(false)}/>
            )}
            <div className='absolute right-0 top-0 -z-10 w-[35%] h-full bg-DragoOrange home:static home:h-dvh'></div>
        </div>
  )
}
