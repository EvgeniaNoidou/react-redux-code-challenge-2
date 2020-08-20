import React, { useState, useRef } from 'react';
import classes from '../../components/form.module.css';

const NewCompany = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [revenue, setRevenue] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newCompany = {
            name: name,
            address: address,
            revenue: revenue,
            phoneNumber: phoneNumber

        }
        props.onAddCompany(newCompany);
    }
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>Create New Company</h2>
            <form
                className={classes.Form}
                onSubmit={event => onSubmitHandler(event)}
            >
                <label>Name</label>
                <input type="text" defaultValue={name} onChange={event => setName(event.target.value)}></input>
                <label>Address</label>
                <input type="text" defaultValue={address} onChange={event => setAddress(event.target.value)} ></input>
                <label>Revenue</label>
                <input type="text" defaultValue={revenue} onChange={event => setRevenue(event.target.value)}></input>
                <label>Phone</label>
                <input type="number" defaultValue={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} ></input>
                <button>Save</button>
            </form>
        </div>
    );
};


export default NewCompany;