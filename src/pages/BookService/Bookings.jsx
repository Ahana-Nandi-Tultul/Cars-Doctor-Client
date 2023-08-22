import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const handleDeleteBooking = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-doctor-server-five-sigma.vercel.app/booking/${_id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        // console.log(data)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          );
                        const remaining = bookings.filter(bk => bk._id !== _id);
                        setBookings(remaining);
                    }
                })
            }
          })
    }

    const handleConfirm = _id => {
        const procced = confirm('Are you sure?');
        if(procced){
            fetch(`https://car-doctor-server-five-sigma.vercel.app/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({status: "confirmed"})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0 ){
                    alert('Booking confirmed')
                    const remaining = bookings.filter(bk => bk._id !== _id)
                    let updatedBooking = bookings.find(bk => bk._id === _id);
                    updatedBooking.status = "confirmed";
                    const newBookings = [updatedBooking, ...remaining];
                    setBookings(newBookings);
                }
            })
        }
    }

    const url = `https://car-doctor-server-five-sigma.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization : `Bearer ${localStorage.getItem("car-doctor-access")}`
            }
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [url])

    return (
        <div className='my-7'>
            <h2 className='text-center text-5xl font-bold my-6'>Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Service Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDeleteBooking = {handleDeleteBooking}
                            handleConfirm = {handleConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;