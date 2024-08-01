import React, { useState } from 'react'
import "./components.css"

export default function General() {
    const [general, setGeneral] = useState({
        name: 'Melanie Liu',
        email: 'melanieliu@berkeley.edu',
        phone: '4158166906',
        location: 'San Francisco'
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setGeneral(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current state:', general); // Debugging line to see the current state
        if (general && general.name) {
            alert(`Name: ${general.name}`);
        } else {
            alert('Name is undefined');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>General</h2>
                <label>Name</label>
                <input onChange={handleInputChange} type="text" name="name" value={general.name} />
                <label>Email</label>
                <input onChange={handleInputChange} type="email" name="email" value={general.email} />
                <label>Phone</label>
                <input onChange={handleInputChange} type="tel" name="phone" value={general.phone} />
                <label>Location</label>
                <input onChange={handleInputChange} type="text" name="location" value={general.location} />
                <button type="submit">Submit</button>
            </form>
            <GeneralBuilder {...general} />
        </div>
    );
}

  export const GeneralBuilder = ({ name, email, phone, location }) => {
    return (
      <div className="general">
        <h1 style={{ textAlign: 'center' }}>{ name }</h1>
        <h1>{ email }</h1>
        <h1>{ phone }</h1>
        <h1>{ location }</h1>
      </div>
    );
  }


// class General extends Component {
//     constructor() {
//         super()

//         this.state = {
//             firstName: "",
//             lastName: "",
//             email: "",
//             phone: "",
//             location: "",
//             about: "",
//             editMode: true,
//         }
//     }
    
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.setState({
//             editMode: false
//         })
//     }

//     handleEdit = () => {
//         this.setState({
//             editMode: true
//         })
//     }

//     render() {
//         const { firstName, lastName, email, phone, location, about, editMode } = this.state;
//         const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
//         const submitButton = <button type="submit" className="submit-button">SUBMIT</button>;

//         // Form to be shown in edit mode
//         const editContent = (
//             <div>
//                 <form className="general-form" onSubmit={this.handleSubmit}>
//                     <h1 className="general">General {submitButton}</h1>
//                     <div className="name-field">
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             name="firstName"
//                             value={firstName}
//                             onChange={this.handleChange}
//                             required
//                         ></input>
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             name="lastName"
//                             value={lastName}
//                             onChange={this.handleChange}
//                             required
//                         ></input>
//                     </div>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         name="email"
//                         value={email}
//                         onChange={this.handleChange}
//                         required
//                     ></input>
//                     <input
//                         type="tel"
//                         placeholder="Phone Number"
//                         name="phone"
//                         value={phone}
//                         onChange={this.handleChange}
//                         required
//                     ></input>
//                     <input
//                         type="text"
//                         placeholder="City, State"
//                         name="location"
//                         value={location}
//                         onChange={this.handleChange}
//                         required
//                     ></input>

//                 </form>
//             </div>
//         )

//         // Text to be shown after submission
//         const submittedContent = (
//             <div className="general-div">
//                 {editButton}
//                 <div className="name-div">
//                     <h1>{firstName.toUpperCase()}</h1><h1>{lastName.toUpperCase()}</h1>
//                 </div>
//                 <hr></hr>
//                 <div className="contact-div">
//                     <p>{email}</p>
//                     <p>|</p>
//                     <p>{phone}</p>
//                     <p>|</p>
//                     <p>{location}</p>
//                 </div>
//                 <div className="about">
//                     <h4>ABOUT ME</h4>
//                     <p>{about}</p>
//                 </div>
//             </div>
//         )

//         return(
//             <div>
//                 {editMode ? editContent : submittedContent}
//             </div>
//         )
//     }
// }

// export default General;