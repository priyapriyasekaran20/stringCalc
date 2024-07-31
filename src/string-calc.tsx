import React, { useEffect, useState } from 'react';

function StringCalc() {
    const [inputVal, setInputVal] = useState('');
    const [outputVal, setOutputVal] = useState('');

    const onChange = (event: any) => {
        let getVal = event.target.value;
        let output = '';
        let splitData = getVal.split('');
        if (splitData.indexOf('-') !== -1 && +splitData[splitData.indexOf('-') + 1] > 0) {
            output = 'Negative Numbers Not Allowed';
        } else {
            output = splitData.filter((line: any) => +line > 0).reduce((a: any, b: any) => +a + +b, 0);
        }
        setInputVal(getVal);
        setOutputVal(output);
    }

    return (<>
        <input type='text' onChange={onChange} value={inputVal}></input>
        <div>Input : {inputVal}</div>
        <div>Output : {outputVal}</div>
    </>);
}

export default StringCalc;
