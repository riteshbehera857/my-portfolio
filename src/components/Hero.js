import React from 'react'
import HeroBackground from '../components/hero/HeroBackground'
import HeroIntro from '../components/hero/HeroIntro'
import HeroPassion from '../components/hero/HeroPassion'

const Hero = () => {
    return (
        <main className="hero">
            <HeroBackground />
            <HeroIntro />
            <HeroPassion />

            <div class="hero__circle--1">&nbsp;</div>
            <div class="hero__circle--2">&nbsp;</div>
        </main>
    )
}

export default Hero
