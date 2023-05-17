import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface ButtonProps {
  buttonImage: string
  link: string
}
const Button: React.FC<ButtonProps> = ({ buttonImage, link }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => {
        void router.push(link)
      }}
      className="relative h-8 w-full cursor-pointer last:mt-auto"
    >
      <Image src={buttonImage} fill alt="test" />
    </div>
  )
}
const SideBar: React.FC = () => {
  return (
    <div className="flex h-screen w-16 flex-col bg-[#D9D9D9] px-2 pb-8 pt-12 last:mt-auto">
      <Button buttonImage="/home.svg" link="home" />
      <Button buttonImage="/faq.svg" link="login" />
    </div>
  )
}

export default SideBar
