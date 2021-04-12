import React from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';

const newPassword = () => {
    return (
        <div className='formsContent centerElementsInPage'>
            <div className='centerElementsInPage'>
                <form>
                    <div>
                        <div>
                            <RiLockPasswordFill />
                            <label>Nouveau mot de passe</label>
                        </div>
                        <input type='password'/>
                    </div>
                    <div>
                        <div>
                            <RiLockPasswordFill />
                            <label>Confirmez le nouveau mot de passe</label>
                        </div>
                        <input type='password'/>
                    </div>
                    <button>Réinitialiser le mot de passe</button>
                </form>
            </div>
        </div>
    )
}

export default newPassword