import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const BookServices = () => {
    const service = useLoaderData();
    // console.log(service);
    const {_id, service_id, title, img, price} = service;
    const {user} = useContext(AuthContext);
    const handleBookServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user.email
        const price = form.price.value;
        console.log(name, date, email, price);

        const order = {
            customer: name,
            date,
            email, 
            price,
            service: _id,
            img,
            title
        }

        fetch(`http://localhost:3000/booking`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Thank you for booking',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-5xl font-bold my-5'>Book Service: {title}</h2>
            <form onSubmit={handleBookServices}>
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email"
                        defaultValue={user?.email} className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={" $" + price} name="price" 
                        className="input input-bordered" required/>
                    </div>
                </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Order Confirm" className='btn btn-primary'/>
                    </div>
            </form>
        </div>

    );
};

export default BookServices;