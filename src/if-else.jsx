import React from 'react'



const IfElse = () => {
    var firstName = "waqar";
    var lastName = "hussain";
    let x = 5;
    let y = x++;

 
    // if (!(firstName === "xyz")) {
    //     alert('x:', x , 'y:', y);
    // }
    console.log('x:', x , 'y:', y);


    if (firstName === "waqar" && lastName === "hussain"){
        alert("hello waqar hussain");
    }else{
        alert("check name list");
    }
    
    
       
    
    // if (name === "waqar" || name === "hussain") {
    //     alert("hello waqar hussain");
    // }




    // if (name === "waqar") {
    //     alert("hellow waqar");
    // } else if (name === "hussain") {
    //     alert("hello hussain");
    // }



    // if (name === "waqar") {
    //     alert("hello waqar");
    // }
    // if (name === "waqar") {
    //     alert("bye");
    // } else {
    //     alert("who are you");
    // }

    return (
        <div>
            {/* <h1>{IfElse}</h1> */}
        </div>
    )
}

export default IfElse