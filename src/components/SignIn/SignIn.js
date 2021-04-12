import React from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const SignIn = () => {
    return (
        <div className='SignContent'>
            <div>
                <form>
                    <div>
                        <div>
                            <MdEmail />
                            <label>E-mail</label>
                        </div>
                        <input type='email'/>
                    </div>
                    <div>
                        <div>
                            <RiLockPasswordFill />
                            <label>Mot de passe</label>
                        </div>
                        <input type='password'/>
                    </div>
                    <button>Se connecter</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn