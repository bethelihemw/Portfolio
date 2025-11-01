function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_0snjzq7","template_gn1tg1n", parms).then(alert("Email Sent!!!"))
}