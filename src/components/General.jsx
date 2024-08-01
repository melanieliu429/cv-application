import React from 'react';
import './components.css';

export default function General({ general, handleInputChange }) {

    return (
        <div>
            <form>
                <h2>General</h2>
                <label>Name</label>
                <input onChange={handleInputChange} type="text" name="name" value={general.name} />
                <label>Email</label>
                <input onChange={handleInputChange} type="email" name="email" value={general.email} />
                <label>Phone</label>
                <input onChange={handleInputChange} type="tel" name="phone" value={general.phone} />
                <label>Location</label>
                <input onChange={handleInputChange} type="text" name="location" value={general.location} />
            </form>
        </div>
    );
}