function captcha()
{
	var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*+';
	var captcha = '';

	for (var i = 0; i < 5; i++) 
    {
		var index = Math.floor(Math.random() * alpha.length);
		captcha += alpha[index];
	}

	document.getElementById("captcha").value = captcha;
}

function submitt() {
	var generatedCaptcha = document.getElementById('captcha').value;
	var enteredCaptcha = document.getElementById('textinput').value;

	if (generatedCaptcha == enteredCaptcha)
    {
		alert("Captcha is running successfully");
	}
     else 
    {
		alert("The entered captcha is invalid try again! ");
	}
}
