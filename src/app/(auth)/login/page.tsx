'use client'

import Button from '@/componets/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

const Page: FC = () => {
    const [isLoading, setIsloading] = useState<boolean>(false)

    async function loginWithGoogle() {
        setIsloading(true)
        try {
         await signIn('google')
        }  
        catch (error) {
          toast.error('SOmething wnet wrong with your login.')
        }
        finally{
            setIsloading(false)
        }
    }

    return (
    <>
       <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex flex-col items-center max-w-md space-y-8'>
            <div className='flex flex-col items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M36,4H14C8.486,4,4,8.486,4,14v22c0,5.514,4.486,10,10,10h22c5.514,0,10-4.486,10-10V14C46,8.486,41.514,4,36,4z M32.318,28.732c-1,1.614-2.741,2.654-4.644,2.748l-3.535,4.969c-0.19,0.268-0.496,0.42-0.814,0.42	c-0.085,0-0.171-0.011-0.256-0.033c-0.402-0.106-0.697-0.452-0.739-0.866l-0.363-3.597c-1.851,0.754-3.822,0.741-5.616-0.057	c-1.847-0.822-3.28-2.408-3.933-4.354c-1.282-3.83,0.532-7.842,4.146-9.323c1.529-2.791,5.064-4.64,8.95-4.64	c3.218,0,6.178,1.226,8.003,3.296C36.137,17.902,38,20.214,38,22.931C38,26.09,35.463,28.667,32.318,28.732z"></path>
</svg> ChatApp
                 <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                    Sign in to your account
                 </h2>
            </div>

            <Button isLoading={isLoading}
            type='button'
            className='max-w-sm mx-auto w-full'
            onClick={loginWithGoogle}>
                {isLoading ? null :(
                    <svg
                    className='mr-2 h-4 w-4'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='github'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'>
                    <path
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      fill='#4285F4'
                    />
                    <path
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      fill='#34A853'
                    />
                    <path
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      fill='#FBBC05'
                    />
                    <path
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      fill='#EA4335'
                    />
                    <path d='M1 1h22v22H1z' fill='none' />
                  </svg>
                )}
                Google
            </Button>
        </div>
       </div>
    </>
    )
}

export default Page