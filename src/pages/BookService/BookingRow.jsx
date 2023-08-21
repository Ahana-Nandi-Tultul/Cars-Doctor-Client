import React from 'react';

const BookingRow = ({booking, handleDeleteBooking, handleConfirm}) => {
    const {_id, img, title, date, price, status} = booking;
    // console.log(booking);

    return (
        <tr>
        <th>
          <label>
          <button className="btn btn-circle btn-outline" onClick={() => handleDeleteBooking(_id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </label>
        </th>
        <td>
            <div className="avatar">
              <div className=" rounded w-24 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component"/>
              </div>
            </div>
        </td>
        <td>
          {
            title && <span>{title}</span>
          }
        </td>
        <td>{date}</td>
        <td>{price}</td>
        <th>
            {
                status === "confirmed" ? <span className='text-primary'>Confirmed</span> :
                <button className="btn btn-ghost btn-xs" onClick={() => handleConfirm(_id)}>Please Confirm</button>
            }
        </th>
      </tr>
    );
};

export default BookingRow;