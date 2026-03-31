import React from 'react'
import { CitySkies } from './CitySkies'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative mt-12 bg-black text-white border-t-4 border-black">
      {/* City Skyline */}
      <CitySkies />
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bangers text-xl text-comic-yellow mb-4">
              UMANG RAJ JAISWAL
            </h3>
            <p className="font-comic text-sm">
              CS Student, Builder, Speaker. Crafting digital experiences and inspiring communities through code.
            </p>
          </div>
          
          
          
          <div>
            <h3 className="font-bangers text-xl text-comic-yellow mb-4">
              FOLLOW
            </h3>
            <div className="font-comic text-sm space-y-2">
              <ul >
                <Link href={"https://www.instagram.com/umangaaasourrr?igsh=ejRkNTZ6azV2NW94"}>
                <li className='ml-2 mb-4 cursor-pointer'>Instagram</li>
                </Link>
                <Link href={"https://github.com/umangarsour"}>
                <li className='ml-2 mb-4 cursor-pointer'>Github</li>
                </Link>
                <Link href={"https://www.linkedin.com/in/umang-raj-jaiswal"}>
                <li className='ml-2 mb-4 cursor-pointer'>LinkedIn</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-comic-red pt-8 text-center font-comic text-sm">
          <p>&copy; 2026 Umang Raj Jaiswal. All rights reserved.</p>
          <p className="text-comic-yellow mt-2 font-bangers">BUILDING THE FUTURE! 💻</p>
        </div>
      </div>
    </footer>
  )
}
