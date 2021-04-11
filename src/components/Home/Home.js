import React, { Fragment } from 'react'
import Header from './Header'

const Home = () => {
    return (
        <Fragment>
            <Header />
            <section>
                <p className='slogan bold center'>L'amour à quelques clics...</p>
                <a className="btn btn-success bold sign-up" href="#" role="button">S'inscrire</a>
            </section>
        </Fragment>
    );
}

export default Home