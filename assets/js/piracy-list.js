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

function getFavicon(url) {
	const link = document.createElement('a');
	link.href = url;
	return `https://www.google.com/s2/favicons?domain=${link.hostname}`;
}

const links = document.querySelectorAll('.link');
links.forEach(link => {
	const faviconUrl = getFavicon(link.href);
	const faviconSpan = document.createElement('span');
	faviconSpan.classList.add('favicon');
	faviconSpan.style.backgroundImage = `url(${faviconUrl})`;
	link.insertBefore(faviconSpan, link.firstChild);
});

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

$.getJSON("http://ip-api.com/json/?fields=61439",
function(data) {
	$("#gfg").html(data.query);
	$("#gfg1").html(data.country);
	$("#gfg2").html(data.city);
})
