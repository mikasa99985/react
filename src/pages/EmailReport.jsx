import React from 'react'

const EmailReport = () => {
    return (
        <>
            <div className='container'>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="button" class="btn">Submit</button>
            </div>
        </>
    )
}

export default EmailReport
