function val(){
	if (form.name.value == "") {
		alert("PLEASE! FILL UP");
		form.name.focus();
		return false;
	}

	if (form.email.value == "") {
		alert("PLEASE! FILL UP");
		form.email.focus();
		return false;
	}

	if (form.contact.value == "") {
		alert("PLEASE! FILL UP");
		form.contact.focus();
		return false;
	}

	if (form.message.value == "") {
		alert("PLEASE! FILL UP");
		form.message.focus();
		return false;
	}
		return true;
}