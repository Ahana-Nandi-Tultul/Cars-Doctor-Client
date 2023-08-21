import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen my-14 px-4">
            <div className="hero-content flex-col lg:flex-row gap-4">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="rounded-lg shadow-2xl w-5/6 h-[473px]" />
                    <img src={parts} className="rounded-lg shadow-2xl w-1/2 absolute right-10 bottom-[-60px] border-8
                    border-white" />
                </div>
                <div className='lg:w-1/2 space-y-6'>
                    <h2 className='text-2xl text-orange-600 font-bold'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour, or 
                    randomised words which do not look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form,
                     by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;