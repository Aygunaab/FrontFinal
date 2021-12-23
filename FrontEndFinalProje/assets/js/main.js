//banner slider js
$('.slider-banner').slick({
	dots: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay: true,
	autoplaySpeed: 3000,
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				dots: true,
				infinite: true,
				speed: 500,
				fade: true,
				cssEase: 'linear',
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1
			}
		}
	]
});

//shop filter js
filterSelection('all');
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName('shop-card');
	if (c == 'all') c = '';
	for (i = 0; i < x.length; i++) {
		RemoveClass(x[i], 'show');
		if (x[i].className.indexOf(c) > -1) AddClass(x[i], 'show');
	}
}

function AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}

var btnContainer = document.getElementById('BtnContainer');
var btns = btnContainer.getElementsByClassName('filter-panel-item ');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		var current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}
function animate() {
	document.getElementsByClassName('parallax').style.webkitTransitionDuration = '1s';
	document.getElementsByClassName('parallax').style.backgroundSize = '200% 200%';
}

//testimonial slider
$('.sliders-test').slick({
	dots: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right'
});
