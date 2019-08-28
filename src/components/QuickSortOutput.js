import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import './QuickSortOutput.scss';

const QuickSortOutput = ({ in_arr, exe_arr, left, right, pivot, execute }) => {
  // console.log("TCL: QuickSortOutput -> sortedEl", sortedEl)
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
              <div className={'exe-up' + (pivot === key ? 'pivot-p ' : '')} >
                <span> {a}</span>
              </div>
              <div className="exe-down">
                {(left === key) ? <span>L</span> : ''}
                { (right === key) ? <span>R</span> : ''}
                {(pivot === key) ? <span>P</span> : ''}
              </div>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Button className="run-btn" type="button" onClick={() => execute('with_animation')}>Run with animation</Button>
        <Button className="run-btn" type="button" onClick={() => execute('without_animation')}>Run without animation</Button>
      </div>

    </Fragment>
  )
}

export default QuickSortOutput;