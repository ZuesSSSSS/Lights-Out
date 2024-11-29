import { LogoDark } from "@/app/ui/LogoDark";
import Link from "next/link";
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export default function Main() {
  return (
    <html className={`${irishGrover.className} bg-black`}>
      <div className="m-5 text-white">
        {/* Title */}
        <h1 className="text-5xl flex justify-center mt-2">Turn the light on?</h1>
        
        {/* Light Switch (btn & UI) */}
        <div className="flex justify-center align-center mt-2">
          
          {/* On/btn/Off */}
          <div className="flex justify-center flex-col items-center mt-20 w-52 h-80 border-2 border-white">
            <div className="flex p-5 text-3xl">
              On
            </div>
            
            {/* btn / Separater / fake btn */}
            <div className="flex flex-col p-1 border border-white">
              <Link href="/Home" className="flex w-10 h-10 bg-zinc-600 rounded-t hover:bg-zinc-400"></Link>
              <div className="flex w-10 h-1 bg-zinc-800"></div>
              <div className="flex w-10 h-10 bg-zinc-900 rounded-b"></div>
            </div>
            
            <div className="flex p-5 text-3xl">
              Off
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
