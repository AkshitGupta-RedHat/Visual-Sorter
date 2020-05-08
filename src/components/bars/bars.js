import React, { Component } from 'react'
import Table from './tablarArray'


class Bars extends Component {
    state = {
        array: [90, 56, 234, 10, 56, 34, 67, 23]
    }

    handleSort = () => {
        var myloop;
        var arr = this.state.array;
        var len = arr.length;
        var j = 0;

        for(var j=0;j<len;j++) {
            var temp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // this.setState(() =>({
                //     setTimeout( ()=> {
                //         alert('hello');
                //       }, 3000);
                // }))
            }
            setTimeout(() => {
                this.setState({
                    array: arr
                });
            }, 2100);
         
            j++;
            len--;
          
            console.log("arr", arr);
        }
    
    }
componentDidUpdate(){
    console.log("update")
}
    render() {

        console.log(this.state.array)

        return (
            <div className="row">
                <button onClick={this.handleSort} className="btn">srter </button>
                {
                    this.state.array.map((value, index) => {
                        return <Table height={value + "px"} />


                    })
                }

            </div>
        )

    }



}




export default Bars