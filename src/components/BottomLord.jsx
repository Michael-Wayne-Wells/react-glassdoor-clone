import React from 'react';

function BottomLord(){
  return (
    <div className="BottomLord">
      <style jsx>{`
          .AlertText {
            text-align: center;
            background-color: lightgray;
            height: 40px;
            margin-top: 20px;
            padding-top: 10px;
          }
          .newText {
            padding: 10px;
          }
          .newStyle {
            color: Orange;
          }
          .newSeeJobs {
            color: blue;
          }

          `}</style>
        <p className='AlertText'><span className='newStyle'>NEW!</span><span className="newText"> What are the Best Jobs in AMerica for 2020?</span><span className="newSeeJobs">See jobs</span></p>

      </div>
    );
  }

  export default BottomLord;
