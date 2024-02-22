import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './TestLogin.js';
import './LoginSignup.css'; // แก้ไขชื่อไฟล์ CSS
function Anchor({ href, children }) {
    return <a href={href}>{children}</a>;
}

function LoginSignup() {
    return (
        <div className="Container" id='Container'>
            <div className='Form-container sign-up'>
                <form>
                    <h1>Create Account</h1>
                    <div className="Social-icons">
                        <FontAwesomeIcon icon={faGoogle} className="icon"/>
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    </div>
                    <span>or use your email for registered</span>
                    <input type="text" name="Name" placeholder="Name" />
                    <input type="email" name="Email" placeholder="Email" />
                    <input type="password" name="Password" placeholder="Password" />
                    <input type="password" name="Confirm_Password" placeholder="Confirm Password" />
                    <input type="Date" name="Date_Of_Birth" />
                    <select name="Gender" id="">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="LGBTQ+">LGBTQ+</option>
                    </select>
                    {/*<input type="text" name="Address" placeholder="Your address" />
                    <input type="text" name="Phone_Number" placeholder="Phone Number" />
                    <input type="text" name="Additional_Information" placeholder="More Information" />*/}
                    <button>Sign up</button>
                </form>
            </div>
            <div className='Form-container sign-in'>
                <form>
                    <h1>Sign In</h1>
                    <div className="Social-icons">
                        <FontAwesomeIcon icon={faGoogle} className="icon"/>
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    </div>
                    <span>or use your email password for sign in</span>
                    <input type="email" name="Email" placeholder="Email" />
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
