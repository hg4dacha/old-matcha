import React from 'react';
import { MdEmail } from 'react-icons/md';

const ForgotPassword = () => {
    return (
        <div className='formsContent centerElementsInPage'>
            <div className='centerElementsInPage'>
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