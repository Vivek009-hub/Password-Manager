import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between py-5 px-4 h-14 items-center">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700'> &lt;</span>
                    <span>Pass</span>

                    <span className='text-green-500'>OP/&gt;</span>
                </div>

                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='/'>About</a>
                        <a className='hover:font-bold' href='/'>Contact</a>
                        <a className='hover:font-bold' href='/'>Login</a>
                    </li>
                </ul> */}
                <button className='text-white bg-green-700 my-5 rounded-md flex justify-between items-center ring-white ring-1'>
                    <img className='invert w-10 p-1' src='/icons/github.svg' alt='github' />
                    <span className='font-bold px-2'>GitHUb</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar 