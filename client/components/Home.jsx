import React from 'react'
import { Button } from './Button'

const Home = () => {

    return (
        <>
            <div className='hero-container'>
                <h1>ADVENTURE AWAITS</h1>
                <p>Where to Next?</p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        BOOK NOW
                    </Button>

                </div>
            </div>
        </>
    )
}


export default Home