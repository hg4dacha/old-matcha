import React from 'react'
import Header from './Header'

const Home = () => {
    return (
            <div className='HomeContent'>
                <Header />
                <section>
                    <p className='slogan bold center'>L'amour à quelques clics...</p>
                    <a className="btn btn-success sign-up" href="#" role="button">S'inscrire</a>
                </section>
            </div>
    );
}

export default Home