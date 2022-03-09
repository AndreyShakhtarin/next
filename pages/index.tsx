import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/me.png'

const Home: NextPage = () => {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
          src={profilePic}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
      />
      <p>Welcome to my homepage!</p></>
  )
}

export default Home
