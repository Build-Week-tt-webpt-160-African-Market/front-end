import React, { useState } from 'react';
import '../index.css';

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    return (
        <div>
            <div className='form-container'>
                <form>
                    <input
                        type='text'
                        name='email'
                        value={user.email}
                        placeholder='Email'
                    />
                    <input
                        type='text'
                        name='password'
                        value={user.password}
                        placeholder='Password'
                    />
                    <button type='submit'>Login!</button>
                </form>
            </div>
        </div>
    )
}

export default Login;