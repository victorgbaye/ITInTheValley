import React from 'react'
import styles from './Signup.module.css';
import signup from './signup.png'
const Signup = () => {
  return (
    <>
    <main>
        <img src={signup} alt =""/>
        <section>
            <form>
                <div>
                    <label>Name</label>
                    <input placeholder='Enter your full name'/>
                </div>
                <div>
                    <label>Mobile number</label>
                    <input placeholder='Mobile number'/>
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder='E-mail'/>
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder='Password' type="password"/>
                </div>
                <div>
                    <label>Verify password</label>
                    <input placeholder='Password'type="password"/>
                </div>
                {/* <select>
                    <option disabled selected hidden style={{color:'grey'}}>Select</option>
                    <option>Journalist</option>
                    <option>Photographer</option>
                </select> */}
                <button>Sign up</button>
            </form>
            {/* <p>Already a member? Login.</p> */}
        </section>
        
    </main>
    </>

  )
}

export default Signup