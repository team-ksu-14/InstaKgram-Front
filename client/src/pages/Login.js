import React from 'react';

const Login = ({history}) =>{
    return (
        <div>
            Login Page
            <button onClick ={() => {history.push('/main')}}>
                gohome
            </button>
        </div>
    )
}

export default Login;