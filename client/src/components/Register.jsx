import React, { useState } from "react"
import axios from "axios"

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        lastname: '',
        age: '',
        nationality: '',
        gender: '',
        date_of_birth: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('/register/api/createUser',formData)
            console.log('User registerd', response.data)
        }catch(err){
            console.error(err.message)
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Lastname:</label>
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div>
                    <label>Nationality:</label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register