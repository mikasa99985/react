import React, { useState } from 'react'
import QRCode from "react-qr-code";
import { db } from '../../firebase.config'
import { Link } from 'react-router-dom'
import credit_card_img from '../assets/credit-card.png'
import paypal_img from '../assets/paypal.png'
import paytm_img from '../assets/paytm.png'
import visa_img from '../assets/visa.png'
import master_card_img from '../assets/master_card.png'
import '../utility/css/payment.css'
import paytm_logo_img from '../assets/Paytm-Logo.png'
import PayPal_logo_img from '../assets/PayPal_logo.png'
import '../utility/css/btn_glow.css'

const Payment = () => {

  const [state, setSetate] = useState('select');

  return (
    <>
      {/* <h1>Payment</h1> */}
      {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 300, width: "100%" }}>
        <QRCode
          size={200}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          title={'hi'}
          value={'Hello World'}
          level ={'H'}
          viewBox={`0 0 256 256`}
          bgColor={'#FFFFFF'}
          fgColor={'#6f42c1'}
        />
      </div>
      <button onClick={sendEmail} className='btn btn-primary'>Send</button> */}

      <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100%', height: '100vh' }}>
        {state=='select'?<h1 className='mb-5'>Select Your Payment</h1>:<></>}
        {state=='card'?<h1 className='mb-5'>Card Payment</h1>:<></>}
        {state=='paytm'?<h1 className='mb-5'>Paytm Payment</h1>:<></>}
        {state=='paypal'?<h1 className='mb-5'>PayPal Payment</h1>:<></>}

        <div className="payment-process-box">

          {/* Payment Select */}
          {
            state == 'select' ?
              <div className="payment-choice-box">
                <button className="payment-card">
                  <img src={credit_card_img} className='me-3' alt="" />
                  <span>Card Payment</span>
                  <svg width={20} height={20} fill="none" style={{ color: 'black' }} className='ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                  </svg>
                </button>

                <button className="payment-card">
                  <img src={paytm_img} className='me-3' alt="" />
                  <span>Paytem payment</span>
                  <svg width={20} height={20} fill="none" style={{ color: 'black' }} className='ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                  </svg>
                </button>

                <button className="payment-card">
                  <img src={paypal_img} className='me-3' alt="" />
                  <span>Paypal Payment</span>
                  <svg width={20} height={20} fill="none" style={{ color: 'black' }} className='ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                  </svg>
                </button>
              </div>
              :
              <></>
          }

          {/* debit card payment */}
          {
            state == 'card' ?
              <form className='p-4 d-flex flex-column justify-content-between w-100 h-100'>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className='text-uppercase m-0'>Payment details</h4>
                  <div className="">
                    <img src={visa_img} width={60} className='mx-2' height={60} alt="" />
                    <img src={master_card_img} width={50} className='mx-2' height={40} alt="" />
                  </div>
                </div>

                <div className="">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder='name' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="card" className="form-label">Card number</label>
                    <input type="text" className="form-control" id="card" placeholder='0000 0000 0000 0000' />
                  </div>
                  <div className="d-flex">
                    <div className="mb-3">
                      <label htmlFor="exp" className="form-label">Expirtion</label>
                      <input type="text" className="form-control payment-input" id="exp" aria-describedby="emailHelp" placeholder='MM / YY' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="ccv" className="form-label">CCV</label>
                      <input type="password" className="form-control payment-input" id="ccv" aria-describedby="emailHelp" placeholder='•••' />
                    </div>
                  </div>

                  <button type="submit" className="btn-cus btn-blue-glow w-100" style={{ borderRadius: '8px', padding: '8px' }}>Submit</button>
                </div>

              </form>
              :
              <></>
          }

          {/* Paytm payment */}
          {
            state == 'paytm' ?
              <form className='p-4 d-flex flex-column justify-content-between w-100 h-100'>

                <div className="d-flex justify-content-center align-items-center">
                  <img src={paytm_logo_img} width={150} height={100} alt="" />
                </div>

                <div className="h-100">
                  <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                    <QRCode
                      size={200}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      title={'hi'}
                      value={'Hello World'}
                      level={'H'}
                      viewBox={`0 0 256 256`}
                      bgColor={'#FFFFFF'}
                      fgColor={'#1f336b'}
                    />
                  </div>
                  <h2 className=' text-center mt-3'>Scan and pay</h2>
                  <form className='d-flex justify-content-center mt-3'>

                    <div className="form-floating">
                      <input type="password" className="form-control" id="otp" placeholder="Password" />
                      <label htmlFor="otp">OTP</label>
                    </div>


                    <button type="submit" className="btn-cus btn-blue-glow ms-3" style={{ borderRadius: '6px', padding: '8px 18px' }}>Submit</button>
                  </form>
                </div>

              </form>
              :
              <></>
          }

          {/* PayPal payment */}
          {
            state == 'paypal' ?
              <form className='p-4 d-flex flex-column justify-content-between w-100 h-100'>

                <div className="d-flex justify-content-center align-items-center">
                  <img src={PayPal_logo_img} width={130} height={50} alt="" />
                </div>

                <div className="h-100 d-flex flex-column justify-content-center">

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='email' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' placeholder='password' />
                  </div>

                  <button type="submit" className="btn-cus btn-blue-glow w-100" style={{ borderRadius: '8px', padding: '8px' }}>Submit</button>
                </div>

              </form>
              :
              <></>
          }


          {/* Successful */}
          {
            state == 'successful' ?
              <div className="alert alert-success h-100 d-flex justify-content-center align-items-center" role="alert">
                <h2>Successful Payment !!!</h2>
              </div>
              :
              <></>
          }


          {/* ERROR */}
          {
            state == 'error' ?
              <div className="alert alert-danger h-100 d-flex justify-content-center align-items-center" role="alert">
                <h2>ERROR In Payment !!!</h2>
              </div>
              :
              <></>
          }


        </div>
        <div className="d-flex justify-content-between payment-card-pag mt-3">
          <button type="button" class="btn d-flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ddd" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </button>
        </div>

      </div>
    </>
  )
}

export default Payment

// bgColor	string	'#FFFFFF'
// fgColor	string	'#000000'
// level	string ('L' 'M' 'Q' 'H')	'L'
// size	number	256
// title	string
// value	string
