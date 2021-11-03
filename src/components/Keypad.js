// Code Keypad Component Here
import React from 'react';

function Keypad(){
    function keypadChange (e){
        console.log('Entering password...')
    }
    return( 
        <input type="password" onChange={keypadChange} ></input>
    );
};
export default Keypad