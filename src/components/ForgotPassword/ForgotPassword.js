import React from 'react';
import { MdEmail } from 'react-icons/md';

const ForgotPassword = () => {
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
                    <button>Envoyer l'e-mail de réinitialisation</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword