import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export default function LeftBar() {
  return (
    <div className='h-screen flex flex-col justify-between pt-2 pb-8 sticky top-0'>
      {/* LOGO MENU BUTTONS */}
      <div className='flex flex-col gap-4 items-center xxl:items-start'>
        {/* LOGO */}
        <Link href="/" className='p-2 rounded-full hover:bg-[#181818]'>
          <Image src='icons/logo.svg' width={24} height={24} alt='logo' />
        </Link>

        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link key={item.id} href={item.link} className='flex items-center gap-4 rounded-full p-2 hover:bg-[#181818]'>
              <Image src={`icons/${item.icon}`} width={24} height={24} alt={item.name} />
              <span className='hidden xxl:inline'>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* BUTTONS */}
        <Link href={'/'} className='bg-white rounded-full w-12 h-12 flex justify-center xxl:hidden'>
          <Image src='icons/post.svg' width={24} height={24} alt='new post' />
        </Link>
        <Link href={'/'} className='hidden bg-white text-black font-bold rounded-full py-2 px-20 xxl:flex justify-center'>
          Post
        </Link>
      </div>

      {/* USER */}
      <div className='flex items-start justify-between mt-4'>
        <div className='flex items-center gap-2'>
          {/* AVATAR */}
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <Image src={'/general/avatar.png'} width={40} height={40} alt='avatar' />
          </div>

          {/* INFO */}
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Reda</span>
            <span className='text-sm text-textGray'>@jrreda</span>
          </div>
        </div>

        <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
      </div>
    </div>
  )
}
