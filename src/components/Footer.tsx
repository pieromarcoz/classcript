import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const Footer = () => {
  return (
    <footer className='bg-white flex-grow-0'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200'>
            <div className='pb-8 pt-16'>
              <Link href={'/'} className="flex justify-center items-center gap-2">
                  <Image src={'/logo.webp'} height={40} width={30} alt="logo"/>
                  <p className="font-bold text-inherit  text-2xl md:text-3xl">Classcript | Contact</p>
              </Link>
              <div className='py-8 sm:flex items-end gap-4'>
                  <div className={'w-full'}>
                      <Label htmlFor={'name'}>Name</Label>
                      <Input type={'text'}  className={cn(
                          "focus-visible:ring-red-500"
                      )}
                              placeholder={'Your Name'}/>
                  </div>
                  <div className={'w-full'}>
                      <Label htmlFor={'email'}>Email</Label>
                      <Input type={'email'}  className={cn(
                          "focus-visible:ring-red-500"
                      )}
                              placeholder={'you@example.com'}/>
                  </div>
                  <Button className={buttonVariants({
                        className: "!bg-[#21e3ab] hover:!bg-[#19cba9] w-full sm:w-1/2"
                            })}>Send</Button>
              </div>
            </div>
        </div>
        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer