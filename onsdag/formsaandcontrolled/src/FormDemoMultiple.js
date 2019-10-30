import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };
 
  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input 
         name="lastName"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="last Name"
       />
       <input 
         name="email"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="email"
       />
       <input 
         name="phone"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="phone"
       />
       <input 
         name="street"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="street"
       />
       <input 
         name="city"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="city"
       />
       <input 
         name="zip"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="zip"
       />
       <input 
         name="country"
         value={reservation.firstName}
         onChange={handleChange}
         placeholder="country"
       />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;