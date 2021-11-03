// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){
    function focused () {
        console.log('Good!')
    }
    function outOfFocus (){
        console.log('Hey! Eyes on me!')
    }
    return( 
        <button onFocus={focused} onBlur={outOfFocus}>Eyes on me</button>
    );
};
export default EyesOnMe