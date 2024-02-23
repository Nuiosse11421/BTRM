import React, { useState } from 'react';
import axios from 'axios';
import Alert from './components/Alert'; // Import the Alert component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './TestLogin.js';
import './LoginSignup.css'; // แก้ไขชื่อไฟล์ CSS

function Anchor({ href, children }) {
    return <a href={href}>{children}</a>;
}

const LoginSignup = () => {
    const [formData, getFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        gender: '',
        date_of_birth: '',
    });
    const dataChange = (element) => {
        const { name, value } = element.target;
        getFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const SubmitRegister = async (element) => {
        element.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register/api/createUser', formData);
            console.log("User register successful", response.data);
            setIsRegistered(true); // Set registration success state to true
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 400) {
                setAlertMessage("User with the same email or username already exists");
            }
        }
    }

    return (
        <div className='Container' id='Container'> {/* Add active class if registration is successful */}
            {/* Render alert if alertMessage is not null */}
            {alertMessage && <Alert message={alertMessage} />}
            <div className='Form-container sign-up'>
                <form onSubmit={SubmitRegister}>
                    <h1>Create Account</h1>
                    <div className="Social-icons">
                        <FontAwesomeIcon icon={faGoogle} className="icon" />
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </div>
                    <span>or use your email for registered</span>
                    <input type="text" name="username" placeholder='Username' value={formData.username} onChange={dataChange} />
                    <input type="email" name="email" placeholder='email' value={formData.email} onChange={dataChange} />
                    <input type="password" name="password" placeholder='password' value={formData.password} onChange={dataChange} />
                    <input type="password" name="c_password" placeholder='Confirm Password' />
                    <input type="text" name='firstname' placeholder='First Name' value={formData.firstname} onChange={dataChange} />
                    <input type="text" name='lastname' placeholder='Last Name' value={formData.lastname} onChange={dataChange} />
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={dataChange} />
                    <select name="gender" value={formData.gender} onChange={dataChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="LGBTQ+">LGBTQ+</option>
                    </select>
                    {/*<input type="text" name="Address" placeholder="Your address" />
                    <input type="text" name="Phone_Number" placeholder="Phone Number" />
                    <input type="text" name="Additional_Information" placeholder="More Information" />*/}
                    <button type='submit'>Sign up</button>
                </form>
            </div>
            <div className='Form-container sign-in'>
                <form>
                    <h1>Sign In</h1>
                    <div className="Social-icons">
                        <FontAwesomeIcon icon={faGoogle} className="icon" />
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </div>
                    <span>or use your email password for sign in</span>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="Password" placeholder="Password" />
                    <Anchor href="#">Forgot Your Password ?</Anchor>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="Toggle-container">
                <div className="Toggle">
                    <div className="Toggle-panel Toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" id='Login'>Sign In</button>
                    </div>
                    <div className="Toggle-panel Toggle-right">
                        <h1>Hello Everyone!</h1>
                        <p>Registered with your personal details to use all of site features</p>
                        <button className="hidden" id='Register'>Sign Up</button>
                    </div>
                </div>
            </div>
            <script async src="TestLogin.js"></script>
        </div>
    );
}

export default LoginSignup;