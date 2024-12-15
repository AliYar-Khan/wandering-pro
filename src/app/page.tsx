import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { josefinSans } from './font'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-w-full min-h-screen'>
      <header className='w-full flex flex-row justify-between px-9 py-8'>
        <Image
          src={'/logo.png'}
          width={100}
          height={52.69}
          alt='wandering-pro'
        />
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className='cursor-pointer font-cabin font-semibold text-[20px] leading-[39.4px] text-[#150306]'>
                JOIN DISCORD
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='cursor-pointer font-cabin font-semibold text-[20px] leading-[39.4px] text-[#150306]'>
                CONTENT
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='cursor-pointer font-cabin font-semibold text-[20px] leading-[39.4px] text-[#150306]'>
                COMMUNITY
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='cursor-pointer font-cabin font-semibold text-[20px] leading-[39.4px] text-[#150306]'>
                RESOURCES
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='cursor-pointer font-cabin font-semibold text-[20px] leading-[39.4px] text-[#150306]'>
                MORE
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Image
                src={'/search.png'}
                width={18}
                height={18.01}
                alt='search'
              />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className='flex flex-col'>
        <section className='w-full flex flex-col lg:flex-row justify-between mt-[15px] px-12 lg:pl-[50px]'>
          <div className='flex flex-col'>
            <div className='flex flex-row max-w-[324px] lg:max-w-1/2'>
              <h1
                className={`${josefinSans.variable} font-bold text-[40px] leading-[48px] lg:text-[50px] lg:leading-[50px] xl:text-[80px] xl:leading-[96px] text-[#2C2C2C]`}
              >
                THE WANDERING PRO
              </h1>
            </div>
            <div className='flex flex-row max-w-[324px] xl:max-w-[648px] lg:max-w-1/2 lg:mt-2'>
              <span
                className={`${josefinSans.variable} font-bold text-[24px] leading-[28.64px] text-[#31B6C0]`}
              >
                Mentorship Space For Builders
              </span>
            </div>
            <div className='flex flex-row max-w-[324px] xl:max-w-[648px] lg:max-w-1/2 mt-6'>
              <span
                className={`${josefinSans.variable} font-normal text-[24px] leading-[28.64px] text-[#2C2C2C]`}
              >
                Pakistan’s first community for building Products, Projects, and
                Portfolios. Join our Discord for mentorship, project support,
                and collaboration to grow your career!
                <br />
                <br />
                <span className='italic font-semibold'>
                  Hosted by: Saqib Tahir
                </span>
              </span>
            </div>
            <div className='flex flex-row mt-6 max-w-[324px] lg:max-w-1/2'>
              <Link
                href={''}
                className={`${buttonVariants({
                  variant: 'outline'
                })} w-[216px] h-[60px] rounded-2xl leading-[28.64px] bg-[#31B6C0] hover:bg-[#31B6C0] hover:text-[#2C2C2C] text-[#2C2C2C]`}
              >
                <span className='font-bold text-[20px]'>Join Discord</span>
              </Link>
            </div>
          </div>
          <div className='mt-4 lg:mt-0 xl:w-[724px] xl:h-[727px]'>
            <Image
              src={'/hero-images.png'}
              width={634}
              height={627}
              alt='hero-images'
              className=''
            />
          </div>
        </section>
      </main>
    </div>
  )
}
