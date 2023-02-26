const fname = document.getElementById('fname');
const company = document.getElementById('company');
const designation = document.getElementById('designation');
const gmail = document.getElementById('gmail');
const number = document.getElementById('number');
const submit = document.getElementsByClassName('submit-form')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();


{/* <b>Name :</b>${fname.value}
<br/>
<b>Gmail:</b>${gmail.value}
<br/>
<b>Number:</b>${number.value} */}


let ebody = `

<b>Hello </b> ${fname.value}
<p>Thank you for signing up for the 15 day free trial. We have an upcoming session to discuss this further. Looking forward to your presence!
    </p>
    <p><b>Add to Calendar – Calendar file attached in email</b></p>
    <p>Location Map - should be linked to this address - https://goo.gl/maps/mntGC93nYAMpJ52D6
    </p>
    <p>Best regards</p>
    <p>Team Brand Mechanics</p>
`

    console.log('clicked')

    Email.send({
        SecureToken : "da2ebae1-3418-4cce-b4b3-d5a562c39f01",
        To : gmail.value,
        From : "saqibcs23@gmail.com",
        Subject : "Thank you for signing up for the 15-day free trial!",
        Body : ebody
    }).then(
      message => alert("Thank you")
    );



})





// CBC8AC0106469C1A74B97DD17B64720F0654
// CBC8AC0106469C1A74B97DD17B64720F0654

// Server
// smtp.elasticemail.com
// Port
// 2525

// Your security token is da2ebae1-3418-4cce-b4b3-d5a562c39f01 Please take note of this.