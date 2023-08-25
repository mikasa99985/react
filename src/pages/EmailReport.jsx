import React from 'react'

const EmailReport = () => {
    return (
        <>
            <div class="container">
                <form class="report-form">
                    <div class="mb-3">
                        <label for="floatingInput" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="floatingPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    </div>
                    <div class="mb-3">
                        <label for="reportText" class="form-label">Report Description</label>
                        <textarea class="form-control" id="reportText" rows="4" placeholder="Enter report description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Report</button>
                </form>
            </div>


        </>
    )
}

export default EmailReport
