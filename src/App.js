import React, { Component } from 'react';
import './App.css';
import QuickSortInput from './components/QuickSortInput';
import QuickSortOutput from './components/QuickSortOutput';

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
}


/* const theLoop  = (i) => {
  setTimeout(() => {
    console.log("Cheese! ", i);
    if (--i) {          // If i > 0, keep going
      theLoop(i);       // Call the loop again, and pass it the current value of i
    }
  }, 3000);
}; */

class App extends Component {
  count_pause = 0;
  count_resume = 0;
  state = {
    err_msg: '',
    size: 0,
    cs_arr: '',
    in_arr: [],
    exe_arr: [],
    left: 0,
    right: 0,
    pivot: 0
  }

  handleSubmit = (e) => {
    // this.state
    e.preventDefault();
    let err_msg = '';
    let in_arr = this.state.cs_arr.split(',');
    in_arr = in_arr.map(a => +a);
    let size = +(this.state.size);
    if (size !== in_arr.length) {
      err_msg = 'No of Element in Array should be same as Size entered';
      in_arr.length = 0;
    }
    this.setState({
      err_msg,
      in_arr,
      exe_arr: in_arr,
      right: (size - 1),
      pivot: (size - 1)
    });
  }

  handleChange = (e) => {
    // e.target.name
    this.setState({ [e.target.name]: e.target.value });
  }

  quickSort = (arr, start, end) => {
    if (start < end) {
      let pivot = this.partition(arr, start, end);
      this.quickSort(arr, start, pivot - 1);
      this.quickSort(arr, pivot + 1, end);
    }
  }

  partition = (arr, start, end) => {
    let pivot = end;
    let left = start;
    let right = end - 1;

    while (left <= right) {
      if (arr[left] < arr[pivot]) {
        left++;
      } else if (arr[right] > arr[pivot]) {
        right--;
      } else {
        swap(arr, left, right);
      }
    }
    swap(arr, left, pivot);
    return left;
  }

  executeAll = () => {
    let { exe_arr, size } = this.state;
    this.quickSort(exe_arr, 0, size - 1);
    this.setState({
      exe_arr
    })
  }

  executeOneStep = () => {
    this.count_resume++;
    this.executeAll();
  }

  render() {
    const { size, cs_arr, in_arr, exe_arr, err_msg } = this.state;
    return (
      <div className="qs">
        <QuickSortInput size={size} cs_arr={cs_arr} err_msg={err_msg} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <QuickSortOutput in_arr={in_arr} exe_arr={exe_arr} executeAll={this.executeAll} executeOneStep={this.executeOneStep} />
      </div>
    );
  }
}

export default App;
