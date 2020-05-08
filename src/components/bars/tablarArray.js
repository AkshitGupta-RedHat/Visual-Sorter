import React from 'react'
import Bar from './bar'
const Table = (props) =>{
    var {height } = props;
    console.log(props)

    return(
        <div className="col">
            <Bar height={height}/>
        </div>
    )
}
export default Table