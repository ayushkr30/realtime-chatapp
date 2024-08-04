import { FC } from 'react'
import AddFriendButton from '@/componets/AddFriendButton'


const page: FC =() => {
    return (
        <main className='pt-8'>
            <h1 className='font-bold text-5xl mb-8'> Add A Friend</h1>
            <AddFriendButton/>
        </main>
    )
}

export default page