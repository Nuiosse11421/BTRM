import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './LoginSignup.css'; // แก้ไขชื่อไฟล์ CSS

function Anchor({ href, children }) {
    return <a href={href}>{children}</a>;
}

const LoginSignup = ({ onLogin }) => {
    const navigate = useNavigate()
    //Register Data Set
    const [formData, getFormData] = useState({
        email: '',
        password: '',
        c_password: '',
        firstname: '',
        lastname: '',
        gender: '',
        date_of_birth: '',
    })
    //Login Data Set
    const [loginD, getLD] = useState({
        email: '',
        password: '',
    })
    //Get Data From Field Login
    const putData = (element) => {
        const { name, value } = element.target
        getLD(prevState => ({ ...prevState, [name]: value }))
    }
    const dataChange = (element) => {
        const { name, value } = element.target;
        getFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const LoginSB = async (element) => {
        element.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login', loginD)
            onLogin(response.data.user, response.data.token);
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }


    const SubmitRegister = async (element) => {
        element.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register', formData);
            console.log(response.data.message)
            const container = document.getElementById('Container')
            container.classList.remove('active')
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 400) {

            }
        }
    }


    //Even tranfrom login to register
    useEffect(() => {
        const regButton = document.getElementById('Register');
        const container = document.getElementById('Container');
        const loginButton = document.getElementById('Login');

        const handleRegisterClick = () => {
            container.classList.add('active');
        };

        const handleLoginClick = () => {
            container.classList.remove('active');
        };

        regButton.addEventListener('click', handleRegisterClick);
        loginButton.addEventListener('click', handleLoginClick);

        return () => {
            regButton.removeEventListener('click', handleRegisterClick);
            loginButton.removeEventListener('click', handleLoginClick);
        };
    }, []);


    return (
        <div className='Container' id='Container'> {/* Add active class if registration is successful */}
            {/* Render alert if alertMessage is not null */}
            <div className='Form-container sign-up'>
                <form id='regFrom' onSubmit={SubmitRegister}>
                    <h1>Create Account</h1>
                    <div className="Social-icons">
                        <FontAwesomeIcon icon={faGoogle} className="icon" />
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </div>
                    <span>or use your email for registered</span>
                    <input type="email" name="email" placeholder='Email' value={formData.email} onChange={dataChange} />
                    {/*แก้ไข Style ให้ First และ lastname อยู้ในบรรทัดเดียวกัน ถ้าแนะนำให้ใช้ Classname ช่วยในการ Edit 
                    เช่น input className="input2" ข้างใน Css ก็สามารภทำแบบนี้ได้
                    .input.input2{ข้างในนี้ก็แก้ไข Style}*/}
                    <div className='Form-grid password'>
                        <input type="password" name="password" placeholder='password' value={formData.password} onChange={dataChange} />
                        <input type="password" name="c_password" placeholder='Confirm Password' />
                    </div>
                    <div className='Form-grid name'>
                        <input type="text" name='firstname' placeholder='First Name' value={formData.firstname} onChange={dataChange} />
                        <input type="text" name='lastname' placeholder='Last Name' value={formData.lastname} onChange={dataChange} />
                    </div>
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={dataChange} />
                    <select name="gender" value={formData.gender} onChange={dataChange}>
                        <option value="">Select Gender...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="LGBTQ+">LGBTQ+</option>
                    </select>
                    <button type='submit' id='registerBT'>Sign up</button>
                </form>
            </div>
            <div className='Form-container sign-in'>
                <form id='loForm' onSubmit={LoginSB}>
                    <h1>Sign In</h1>
                    <div className="Social-icons">
                        <FontAwesomeIcon icon={faGoogle} className="icon" />
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </div>
                    <span>or use your email password for sign in</span>
                    <input type="email" name="email" placeholder="Email" value={loginD.email} onChange={putData} />
                    <input type="password" name="password" placeholder="Password" value={loginD.password} onChange={putData} />
                    <Anchor href="#">Forgot Your Password ?</Anchor>
                    <button type='submit' id='LoginBT'>Sign In</button>
                </form>
            </div>
            <div className="Toggle-container">
                <div className="Toggle">
                    <div className="Toggle-panel Toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" id='Login' name='Login'>Sign In</button>
                    </div>
                    <div className="Toggle-panel Toggle-right">
                        <h1>Hello Everyone!</h1>
                        <p>Registered with your personal details to use all of site features</p>
                        <button className="hidden" id='Register'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;