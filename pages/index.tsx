import type { NextPage } from 'next'
import Image from 'next/image'
import profilePic from '../public/bg-signup.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Image
          src={profilePic}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
      />
      </>
  )
}

export default Home
