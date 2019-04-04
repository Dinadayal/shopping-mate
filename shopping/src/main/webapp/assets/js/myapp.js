//JQuery code
$(function() {
	//solving the  active manu problem
	switch (manu) {
	case 'About Us':
		$('#about').addClass('active');
		break;
	
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
	default:
		$('#home').addClass('active');
		break;
	}
});