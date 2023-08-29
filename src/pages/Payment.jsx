import React, { useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import { db } from '../../firebase.config'
import { Link, useHistory } from 'react-router-dom'
import credit_card_img from '../assets/credit-card.png'
import paypal_img from '../assets/paypal.png'
import paytm_img from '../assets/paytm.png'
import visa_img from '../assets/visa.png'
import master_card_img from '../assets/master_card.png'
import '../utility/css/payment.css'
import paytm_logo_img from '../assets/Paytm-Logo.png'
import PayPal_logo_img from '../assets/PayPal_logo.png'
import '../utility/css/btn_glow.css'
import { GenerateOTP } from '../utility/js/util'

const Payment = () => {

  const [state, setSetate] = useState('select');
  const [otp_pin, setOtp_pin] = useState(0);

  // valid
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const [MPIN, setMPIN] = useState('');
  const [OTP, setOTP] = useState('');
  const [toast, setToast] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setOtp_pin(GenerateOTP());
  }, [state]);

  function SubmitMPIN(e) {
    e.preventDefault();
    setSetate('loading');
    setTimeout(() => {
      if (parseInt(MPIN) == otp_pin) {
        setSetate('successful');
      } else {
        setSetate('error');
      }
    }, 5000);
  }

  function SubmitCard(e) {
    e.preventDefault();
    setSetate('otp');
    setTimeout(() => {
      setToast(true);
    }, 1000);
  }

  function SubmitOTP(e){
    e.preventDefault();
    setSetate('loading');
    setTimeout(() => {
      if (parseInt(OTP) == otp_pin) {
        setSetate('successful');
      } else {
        setSetate('error');
      }
    }, 5000);
  }

  function SubmitPay(e){
    e.preventDefault();
    setSetate('loading');
    setTimeout(() => {
      setSetate('successful');
    }, 5000);
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100%', height: '100vh' }}>
        {state == 'select' ? <h1 className='mb-5'>Select Your Payment</h1> : <></>}
        {state == 'card' ? <h1 className='mb-5'>Card Payment</h1> : <></>}
        {state == 'paytm' ? <h1 className='mb-5'>Paytm Payment</h1> : <></>}
        {state == 'paypal' ? <h1 className='mb-5'>PayPal Payment</h1> : <></>}
        {state == 'loading' ? <h1 className='mb-5'>Transaction in process</h1> : <></>}

        <div className="payment-process-box">

          {/* Payment Select */}
          {
            state == 'select' ?
              <div className="payment-choice-box">
                <button onClick={() => { setSetate('card') }} className="payment-card">
                  <img src={credit_card_img} className='me-3' alt="" />
                  <span>Card Payment</span>
                  <svg width={20} height={20} fill="none" style={{ color: 'black' }} className='ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                  </svg>
                </button>

                <button onClick={() => { setSetate('paytm') }} className="payment-card">
                  <img src={paytm_img} className='me-3' alt="" />
                  <span>Paytem payment</span>
                  <svg width={20} height={20} fill="none" style={{ color: 'black' }} className='ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                  </svg>
                </button>

                <button onClick={() => { setSetate('paypal') }} className="payment-card">
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
              <form onSubmit={SubmitCard} className='p-4 d-flex flex-column justify-content-between w-100 h-100 needs-validation'>

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
                    <input type="text" className={`form-control ${cardName}`} onChange={(e) => { e.target.value == '' ? setCardName('') : setCardName('is-valid') }} id="name" name='name' aria-describedby="emailHelp" placeholder='name' required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="card" className="form-label">Card number</label>
                    <input type="text" className={`form-control ${cardNumber}`} onChange={e => { e.target.value != 0 ? e.target.value.length == 19 ? setCardNumber('is-valid') : setCardNumber('is-invalid') : setCardNumber('') }} id="card" name='card' placeholder='0000 0000 0000 0000' required />
                  </div>
                  <div className="d-flex">
                    <div className="mb-3">
                      <label htmlFor="exp" className="form-label">Expirtion</label>
                      <input type="text" className={`form-control payment-input ${cardExp}`} onChange={e => { e.target.value != 0 ? e.target.value.length == 5 ? setCardExp('is-valid') : setCardExp('is-invalid') : setCardExp('') }} id="exp" name='exp' aria-describedby="emailHelp" placeholder='MM / YY' required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input type="password" className={`form-control payment-input ${cardCVV}`} onChange={e => { e.target.value != 0 ? e.target.value.length == 3 ? setCardCVV('is-valid') : setCardCVV('is-invalid') : setCardCVV('') }} id="cvv" name='cvv' aria-describedby="emailHelp" placeholder='•••' required />
                    </div>
                  </div>

                  <button type="submit" className="btn-cus btn-blue-glow w-100" style={{ borderRadius: '8px', padding: '8px' }}>Submit</button>
                </div>

              </form>
              :
              <></>
          }
          {/* debit otp submit */}
          {
            state == 'otp' ?
              <form onSubmit={SubmitOTP} className='p-4 d-flex flex-column justify-content-between w-100 h-100'>
                <div className="d-flex justify-content-center align-items-center">
                  <h1>OTP</h1>
                </div>

                <div className="h-100 d-flex flex-column justify-content-center">

                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={OTP} onChange={e=>setOTP(e.target.value)} id="otp" name='otp' placeholder="Password" />
                    <label htmlFor="otp">Enter OTP</label>
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
              <div className='p-4 d-flex flex-column justify-content-between w-100 h-100'>

                <div className="d-flex justify-content-center align-items-center">
                  <img src={paytm_logo_img} width={150} height={100} alt="" />
                </div>

                <div className="h-100">
                  <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                    <QRCode
                      size={200}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      title={'MPIN'}
                      value={`MPIN : ${otp_pin}`}
                      level={'H'}
                      viewBox={`0 0 256 256`}
                      bgColor={'#FFFFFF'}
                      fgColor={'#1f336b'}
                    />
                  </div>
                  <h2 className=' text-center mt-3'>Scan and pay</h2>
                  <form onSubmit={SubmitMPIN} className='d-flex justify-content-center mt-3'>

                    <div className="form-floating">
                      <input type="password" className="form-control" id="mpin" value={MPIN} onChange={e => setMPIN(e.target.value)} placeholder="Password" required />
                      <label htmlFor="mpin">MPIN</label>
                    </div>

                    <button type="submit" className="btn-cus btn-blue-glow ms-3" style={{ borderRadius: '6px', padding: '8px 18px' }}>Submit</button>
                  </form>
                </div>

              </div>
              :
              <></>
          }

          {/* PayPal payment */}
          {
            state == 'paypal' ?
              <form onSubmit={SubmitPay} className='p-4 d-flex flex-column justify-content-between w-100 h-100'>

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

          {/* Loading */}
          {
            state == 'loading' ?
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="spinner-border border-5" style={{ height: '80px', width: '80px' }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
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
          {
            state != 'successful' && state != 'error' ?
              state == 'select' ?
                <button type="button" className="btn d-flex flex-row" style={{ border: 'none' }} disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                  </svg>
                </button>
                :
                <button onClick={() => { setSetate('select') }} type="button" className="btn d-flex flex-row" style={{ border: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                  </svg>
                </button>
              :
              <></>
          }
          {
            state == 'successful' ?
              <button type="button" onClick={()=>{history.push('/')}} className="btn d-flex flex-row" style={{ border: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
              </button>
              :
              <></>
          }
          {
            state == 'error' ?
              <button type="button" onClick={() => {location.reload()}} className="btn d-flex flex-row" style={{ border: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
              </button>
              :
              <></>
          }



        </div>

      </div>




      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        {
          toast ?
            <div id="liveToast" className="toast" style={{ display: 'block' }} role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <strong className="me-auto">Message</strong>
                <small>11 mins ago</small>
                <button type="button" onClick={()=>{setToast(false)}} className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                <h5>The OTP is</h5>
                {otp_pin} do not share this opt.
              </div>
            </div>
            :
            <></>
        }
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
