import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <div className="flex justify-between items-center">
                    <p className=' text-orange-600 font-bold'>Price: ${price}</p>
                    <Link to={`/bookService/${_id}`}>
                        <button className='text-orange-600 text-2xl'><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;