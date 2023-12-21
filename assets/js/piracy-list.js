function updateCountdown() {
	var timerElement = document.getElementById('timer');
	var seconds = parseInt(timerElement.textContent);

	if (seconds > 0) {
		seconds--;
		timerElement.textContent = seconds;
	} else {
		alert('Countdown complete!');
	}
}

var countdownInterval = setInterval(updateCountdown, 1000);

setTimeout(function() {
	clearInterval(countdownInterval);
	document.getElementById('countdown').innerHTML = 'Countdown complete!';
}, 15000);

document.addEventListener("DOMContentLoaded", function() {
	var popup = document.getElementById("popup");

	setTimeout(function() {
		popup.style.display = "none";
	}, 15000);
});

function scrollToEl(elementId) {
	var element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

let back = document.getElementById("back-to-top");

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		back.style.display = "block";
	} else {
		back.style.display = "none";
	}
}

back.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
