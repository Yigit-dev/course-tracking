import Image from 'next/image'

const Avatar = () => {
  return (
    <Image 
      src="/avatar.png"
      width={40}
      height={40}
      objectFit="cover"
    />
  )
}

export default Avatar
