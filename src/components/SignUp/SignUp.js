import React from 'react';

const SignUp = () => {
    return (
        <div className='formsContent centerElementsInPage'>
            <div className='centerElementsInPage'>
                <form>
                    <div>
                        <label>Nom</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>Prénom</label>
                        <input type='text'/>
                    </div>                <div>
                        <label>Nom d'utilisateur</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type='email'/>
                    </div>                <div>
                        <label>Mot de passe</label>
                        <input type='password'/>
                    </div>
                    <div>
                        <label>Confirmation du mot de passe</label>
                        <input type='password'/>
                    </div>
                    <button>S'inscrire</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp