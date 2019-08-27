import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import './QuickSortOutput.scss';

const QuickSortOutput = ({ in_arr, exe_arr, executeAll, executeOneStep }) => {
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
        {/* <Button type="button" onClick={executeOneStep}>Next</Button> */}
      <Button type="button" onClick={executeAll}>Run</Button>

    </Fragment>
  )
}

export default QuickSortOutput;