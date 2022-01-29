import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import lamelo from './assets/images/pexels-ali-madad-sakhirani-1254502.jpg'
import willy from './assets/images/pexels-alleksana-4271568.jpg'
import anthony from './assets/images/pexels-amina-filkins-5560071.jpg'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/shop',
    text: 'shop',
  },
  {
    id: 4,
    url: '/blog',
    text: 'blog',
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact us',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
]
export const latest = [
  {
    id: 1,
    name: 'Willy Chambo Bag',
    image: willy,
    amount: 1,
    price: 120.99,
  },
  {
    id: 2,
    name: 'Lamelo Trouser',
    image: lamelo,
    amount: 1,
    price: 99.0,
  },
  {
    id: 3,
    name: 'Anthony dats all Shirt',
    image: anthony,
    amount: 1,
    price: 69.99,
  },
]
