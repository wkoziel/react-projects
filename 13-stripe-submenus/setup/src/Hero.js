import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalState } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalState()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone img' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
