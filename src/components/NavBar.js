import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <header className="bg-indigo-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-indigo-100 hover:text-blue-400 text-4xl font-bold cursive tracking-widest">
                        Nuno Oliveira
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-blue-100 bg-blue-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-100 hover:text-blue-400">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-blue-100 bg-blue-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-100 hover:text-blue-400">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-blue-100 bg-blue-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-100 hover:text-blue-400">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/NunoFOliveira" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.youtube.com/channel/UC8NJybRgtPwzRkdZvs4z6CA" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/nunofng-oliveira/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
};

export default NavBar;
