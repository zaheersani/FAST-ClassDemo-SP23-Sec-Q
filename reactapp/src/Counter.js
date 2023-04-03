import React, {useState} from "react";


const myStyle = {
    fontSize: '16pt',
    backgroundColor: 'grey'
}

const element = <p style={myStyle}>Element</p>;

const Counter = () => {

    var count = 0

    const [getCount, setCount] = useState(1)
    // const [getAnother, setAnother] = React.useState('another')
    const [getStart, setStart] = useState(false)

    const inc = () => {
        // alert('increment')
        // count++;
        // console.log(count)
        setCount(c => c + 1)
        // setCount(c => c + 1)
        // setAnother('set Another')
    }

    const dec = () => {
        setCount(getCount - 1)
    }

    return (
        <>
            {!getStart &&
                <button
                    className="btn btn-primary"
                    onClick={() => setStart(true)}
                >Start</button>
            }

            {getStart &&
                <div>
                    <h3>Counter: {getCount}</h3>
                    {element}
                    {/* {getAnother} */}
                    <button
                        className="btn btn-primary"
                        onClick={inc}
                    >Increment</button>
                    <button
                        className="btn btn-primary"
                        onClick={dec}
                        disabled={getCount <= 0 ? true : false}
                    >Decrement</button>
                </div>
            }
        </>
    )
}

function Counter2(props) {
    return <h3>Counter { props.num }</h3>
}

export { Counter, Counter2 };