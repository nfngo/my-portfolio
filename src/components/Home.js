import React from 'react';
import image from '../images/home-background.jpg';

const Home = () => {
    return (
        <main>
            <img src={image} alt="night sky" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-indigo-100 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm Nuno Oliveira</h1>
            </section>
        </main>
    )
};

export default Home;
