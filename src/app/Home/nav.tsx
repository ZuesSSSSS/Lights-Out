import Image from 'next/image';

import { Irish_Grover } from 'next/font/google';
const irishGrover = Irish_Grover({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export default function Nav() {
  return (
    <div className={`${irishGrover.className} flex flex-row justify-between items-center mx-7 }`}>
      <div className='flex flex-col items-center'>
        <div className="text-5xl text-black">
          OUT
        </div>
        <div className="text-xl text-orange-700">
          Lights & Fixtures
        </div>
      </div>
      
      <div className="flex border p-1.5 rounded border-gray-600 h-12 w-3/12 mt-14">
        <Image src="/search.svg" height={30} width={30} alt="search icon" className='m-1 mr-2'/>
        <input className="bg-white text-black outline-none text-xl border-l pl-4 border-gray-200" placeholder='Search..' />
      </div> 

      <div className=''>
        profile person
    </div>
  </div>
  );
}
