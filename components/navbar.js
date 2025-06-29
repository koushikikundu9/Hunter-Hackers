import React from 'react';
import Link from "next/link";
const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-gray-300 via-blue-200 to-blue-400'>
    <div className='max-w-150 mx-auto px-4 py-3'>
      <nav className="bg-gray-300 flex justify-center space-x-4 rounded-xl">
          <Link className="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href="/">Home</Link>
          <Link className="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href="/about">About</Link>
          <Link className="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href="/blogs">Blogs</Link>
          <Link className="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href="/contact">Contact</Link>
      </nav>
    </div>
    </div>
  )
}

export default Navbar;