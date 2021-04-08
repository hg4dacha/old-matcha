import React from 'react'
import Header from './Header'

const Home = () => {
    return (
        <div>
            <Header />
            <section>
                <p className='slogan bold center'>L'amour en quelques clics...</p>
                <a class="btn btn-light bold sign-up" href="#" role="button">S'inscrire</a>
            </section>
        </div>
    );
}

export default Home