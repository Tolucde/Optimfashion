import React, { useEffect } from 'react'
import gsap from 'gsap'
import Body from '../../components/body/body'
import Hero from '../../components/hero/Hero'
import Banner from '../../components/banner/banner'
import Overlay from '../../components/overlay/Overlay'
import Mwcateg from '../../components/mwcateg/mwcateg'

const Home = () => {
  useEffect(() => {
    //timeline
    const tl = gsap.timeline()
    tl.to('.overlay__top__item', 1, {
      height: 0,
      delay: 0.3,
      ease: 'power4.inOut',
      stagger: 0.4,
    })
      .from('.hero', 0.8, {
        opacity: 0,
        y: 200,
        ease: 'elastic.inOut',
      })
      .to('.overlay__bottom__item', 1.4, {
        width: 0,
        ease: 'elastic.inOut',
        delay: -0.8,
        stagger: { amount: 0.8 },
      })
      .to('.hero-image', 1, {
        y: 50,
        ease: 'power4.inOut',
      })
      .from('.banner', 1, {
        opacity: 0,
        x: 400,
        ease: 'power1.in',
      })
      .to('.overlay', 0, { css: { display: 'none' } })
      .from('.hero-image', 1.5, {
        scale: 1.2,
        ease: 'power4.in',
        delay: -2,
      })
  }, [])

  return (
    <div className='home'>
      <Overlay />
      <Hero />
      <Banner />
      <Mwcateg />
      <Body />
    </div>
  )
}

export default Home
