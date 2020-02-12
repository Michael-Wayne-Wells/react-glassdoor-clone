import React from 'react';

function MainSignIn(){
  return (

    <div className="MainSignIn">

      <style jsx>{`
          .MainSignIn {
            text-align: center;
          }
          .faceButt {
            border-radius: 4%;
            background-color: lightblue;
            margin-right: 1%;
          }
          .gooButt {
            border-radius: 4%;
            color: red;
            margin-left: 1%;
          }
          `}</style>
      <h1>Find the Job That Fits Your Life</h1>
      <p>By continuring, you agree to give us your soul.</p>
      <button className='faceButt'>Continue to Face Butt</button>
      <button className='gooButt'>Continue with Goo Butt</button>
      <hr/>
      <p>or</p>
      <hr/>
      <input className='createEmail' placeholder='Create account with Email'></input>
      <p>Please enter a valid email address.</p>
      <input className='password' placeholder='Password'></input><br></br>
      <button className='continueButton'>Continue with Email</button>
      <h3>Are you Hiring? Post jobs for free!</h3>
    </div>

  )
}

export default MainSignIn;
