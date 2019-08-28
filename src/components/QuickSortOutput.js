import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import './QuickSortOutput.scss';

<<<<<<< Updated upstream
const QuickSortOutput = ({ in_arr, exe_arr, executeAll, executeOneStep }) => {
=======
const QuickSortOutput = ({ in_arr, exe_arr, left, right, pivot, execute }) => {
  // console.log("TCL: QuickSortOutput -> sortedEl", sortedEl)
>>>>>>> Stashed changes
  return (
    <Fragment>
      <div className="qso">
        i/o:
        <div className="padding-vertical">
          {
            in_arr.map((a, key) => (
              <div key={key} className="in-arr"> {a} </div>
            ))
          }
        </div>

        o/p:
        <div className="padding-vertical">
          {
            exe_arr.map((a, key) => (
              <div key={key} className="exe-arr">
              <div className={'exe-up'}>
                <span> {a} </span>
              </div>
              </div>
            ))
          }
        </div>
      </div>
<<<<<<< Updated upstream
        {/* <Button type="button" onClick={executeOneStep}>Next</Button> */}
      <Button type="button" onClick={executeAll}>Run</Button>
=======
      <div>
        <Button className="run-btn" type="button" onClick={() => execute('with_animation')}>Run with animation</Button>
        <Button className="run-btn" type="button" onClick={() => execute('without_animation')}>Run without animation</Button>
      </div>
>>>>>>> Stashed changes

    </Fragment>
  )
}

export default QuickSortOutput;