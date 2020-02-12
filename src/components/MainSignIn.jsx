import React from 'react';

function MainSignIn(){
  return (

    <div className="MainSignIn">

      <style jsx>{`
          .MainSignIn {
            text-align: center;
            width: 55%;
            margin: 0 auto;
            margin-top: 50px;
            color: white;
          }

          .thatOr {
            line-height: 0%;
            background: white;
          }

          .line-element {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #ccc;
            margin: 1em 0;
            padding: 0;

          }
          .gooButt {
            border-radius: 5px;
            color: red;
            margin-left: 1%;
            padding: 7px;
            border: none;
            width: 49%;
            margin-bottom: 15px;
          }
          .gooButtImg {
            height: 25px;
            margin-right: 10px;
          }

          .faceButt {
            border-radius: 5px;
            border: none;
            background-color: rgb(34, 123, 239);
            margin-right: 1%;
            padding: 7px;
            color: white;
            width: 49%;
          }
          .faceButtImg {
            height: 25px;
            margin-right: 10px;
          }

          .continueButton {
            margin-top: 30px;
            border-radius: 5px;
            border: none;
            background-color: rgb(34, 123, 239);
            margin-right: 1%;
            padding: 7px;
            color: white;
            width: 49%;
          }

          .byContinuingText {
            font-size: .8rem;
            margin-bottom: 2px;
            text-align: left;
          }
          .validEmailText {
            font-size: .8rem;
            margin-bottom: 2px;
            text-align: left;
          }


          .createEmail {
            width: 100%;
            margin-top: 30px;
            border-radius: 5px;
            height: 45px;
          }

          .password {
            width: 100%;
            margin-top: 5px;
            border-radius: 5px;
            height: 45px;
          }
          h3{
            margin-top: 20px;
              font-size: 20px;
          }

          `}</style>
        <h2>Find the Job That Fits Your Life</h2>
        <p className='byContinuingText'>By continuring, you agree to give us your soul.</p>
        <button className='faceButt'><img className='faceButtImg'src='https://betterbellyproject.com/assets/img/facebook-icon-inverse.png'></img>Continue to Face Butt</button>
        <button className='gooButt'><img className='gooButtImg'src='https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'></img>Continue with Goo Butt</button>
        <div className="inline-line">
          <div className="line-element"><p className="thatOr">or</p></div>

        </div>
        <input className='createEmail' placeholder='Create account with Email'></input>
        <p className="validEmailText">Please enter a valid email address.</p>
        <input className='password' placeholder='Password'></input><br></br>
        <p className="validEmailText">Password must be at least 8 charecters, no spaces.</p>
        <button className='continueButton'>Continue with Email</button>
        <h3>Are you Hiring? Post jobs for free!</h3>
      </div>

    )
  }

  export default MainSignIn;
