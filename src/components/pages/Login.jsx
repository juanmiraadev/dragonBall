import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import CloseButton from '../ui/CloseButton';

export default function Login({handleLogin, onClose}) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorUserPass, setErrorUserPass] = useState("");
    const [errorValidation, setErrorValidation] = useState("");

    const handleSubmit = () => {
        setUserName("");
        setUserPass("");

        setErrorUserName("")
        setErrorUserPass("")
        setErrorValidation("")

        let hasError = false;

        if(!userName) {
            setErrorUserName("• Enter a username")
            hasError = true;
        }

        if(!userPass) {
            setErrorUserPass("• Enter a password")
            hasError = true;
        }

        if(hasError) return;

        if(userName !== 'admin' || userPass !== '1234') {
            setErrorValidation("• User or password doesn't match")
            return
        }

        handleLogin();
        navigate('/characters')
    }

    return (
        <article onClick={onClose} className='absolute size-full bg-DragoGray/55 flex justify-center items-center'>
            <div onClick={(e) => e.stopPropagation()} className='relative w-100 h-100 px-8 py-12 bg-DragoWhite rounded-2xl flex flex-col justify-between items-center'>
                <CloseButton onClose={onClose} />
                <div className='w-full flex flex-col gap-2'>
                    <Input label={"Username"} type={"text"} placeholder={"Username"} value={userName} onChange={(e) => setUserName(e.target.value)} error={errorUserName}/>
                    <Input label={"Password"} type={"password"} placeholder={"*****"} value={userPass} onChange={(e) => setUserPass(e.target.value)} error={errorUserPass} />
                </div>
                {errorValidation && (
                    <p className='text-sm text-DragoAccentRed'>{errorValidation}</p>
                )}
                <Button onClick={handleSubmit} text={"ENTER"} />
            </div>
        </article>
    );
}