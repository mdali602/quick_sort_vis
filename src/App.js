import React, { Component } from 'react';
import './App.css';
import QuickSortInput from './components/QuickSortInput';
import QuickSortOutput from './components/QuickSortOutput';

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
}

class App extends Component {
  state = {
    err_msg: '',
<<<<<<< Updated upstream
    size: 0,
    cs_arr: '',
=======
    size: 0,// 7
    cs_arr: '',// 23, 45, 16, 37, 3, 99, 22
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      exe_arr: in_arr,
      right: (size - 1),
      pivot: (size - 1)
=======
>>>>>>> Stashed changes
    });
  }

  handleChange = (e) => {
    // e.target.name
    this.setState({ [e.target.name]: e.target.value });
  }
<<<<<<< Updated upstream

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
=======
  
  updateStateAsync = (arr, left, right, pivot, isSwap) => {
    return new Promise((resolve) => {
    
    if(isSwap) swap(arr, left, right);
      // setTimeout(() => {
        this.setState({
          arr,
          left,
          right,
          pivot
        }, () => {
        // this.state.arr
          setTimeout(() => {
            resolve();
          }, 3 * 1000)
        })
        // resolve(value);
      // }, 3 * 1000);//Math.floor(Math.random() * 10 * 1000)
    });
  }

  quickSortAsync = async (arr, start, end) => {
    // let { sortedEl } = this.state;
    if (start < end) {
      let pivot = await this.partitionAsync(arr, start, end);
      this.quickSortAsync(arr, start, pivot - 1);
      this.quickSortAsync(arr, pivot + 1, end);
    }
  }

  partitionAsync = (arr, start, end) => {
    return new Promise(r => {

      let pivot = end;
      let left = start;
      let right = end - 1;
  
      let promises = [];
      
  //       for (i = 0; i < arr.length; ++i) {
  //         promises.push(updateStateAsync(arr[i]));
  //       }
        while(left <= right) {
          if (arr[left] < arr[pivot]) {
            promises.push(this.updateStateAsync(arr, left, right, pivot, false));
            left++;
          } else if (arr[right] > arr[pivot]) {
            promises.push(this.updateStateAsync(arr, left, right, pivot, false));
            right--;
          } else {
            // promises.push(this.swapAsync(arr, left, right));
            promises.push(this.updateStateAsync(arr, left, right, pivot, true));
          }
        }
      
      Promise.all(promises)
          .then((results) => {
            // console.log("All done", arr);
            swap(arr, left, pivot);
            let { sortedEl } = this.state;
            sortedEl.push(pivot);

            this.setState({
              arr,
              sortedEl
            }, () => {
              
              r(left);
            })
          })
          .catch((e) => {
              // Handle errors here
          });
      // return left;
    })
  }

  quickSort = (arr, start, end) => {
    if (start < end) {
      let pivot = this.partition(arr, start, end);
      this.quickSort(arr, start, pivot - 1);
      this.quickSort(arr, pivot + 1, end);
    }
>>>>>>> Stashed changes
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
  execute = (opt) => {
    let { in_arr, size } = this.state;
    let exe_arr = [...in_arr];
    this.setState({
      exe_arr: [...in_arr],
      right: (size - 1),
      pivot: (size - 1)
    });
    if (opt === 'with_animation') this.quickSortAsync(exe_arr, 0, size - 1);
    else this.quickSort(exe_arr, 0, size - 1);
    this.setState({
      exe_arr,
    })
  }

  render() {
    const { size, cs_arr, in_arr, exe_arr, err_msg } = this.state;
    return (
      <div className="qs">
        <QuickSortInput size={size} cs_arr={cs_arr} err_msg={err_msg} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
<<<<<<< Updated upstream
        <QuickSortOutput in_arr={in_arr} exe_arr={exe_arr} executeAll={this.executeAll} executeOneStep={this.executeOneStep} />
=======
        <QuickSortOutput {...this.state} execute={this.execute} executeOneStep={this.executeOneStep} />
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default App;
