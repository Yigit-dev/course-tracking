import Image from 'next/image'

const Avatars = () => {
  return (
      <Image 
      src="/avatar.png"
      width={24}
      height={24}
      objectFit="cover"
    />
  )
}

export default Avatars
