//banner slider js
$('.slider-banner').slick({
	dots: false,
	infinite: true,
	speed: 500,
	fade: true,
	slidesToShow: 1,
	cssEase: 'linear',
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				dots: true,
				arrows: false,
				centerMode: true,
				autoplay: true,
				autoplaySpeed: 3000,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},

		{
			breakpoint: 768,
			settings: {
				dots: true,
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: true,
				arrows: false,
				appendDots: '.test-nav',
				infinite: true,
				speed: 300,
				slidesToShow: 1
			}
		}
	]
});
// filter section
$('.shoping-items').isotope({
	itemSelector: '.shop-cards',
	layoutMode: 'fitRows'
});
$('.filter ul li').click(function() {
	$('.filter ul li').removeClass('active');
	$(this).addClass('active');
	var selector = $(this).attr('data-filter');
	$('.shoping-items').isotope({
		filter: selector
	});
	return false;
});

//parallax
function animate() {
	document.getElementsByClassName('parallax').style.webkitTransitionDuration = '1s';
	document.getElementsByClassName('parallax').style.backgroundSize = '200% 200%';
}

//testimonial slider
$('.sliders-test').slick({
	dots: false,
	infinite: true,
	speed: 500,
	cssEase: 'linear',
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				dots: false,
				arrows: false,
				slidesToShow: 1
			}
		},

		{
			breakpoint: 768,
			settings: {
				dots: false,
				arrows: false,
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: false,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1
			}
		}
	]
});

$('.slider-box-sop').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow: '.arrow-prev',
				nextArrow: '.arrow-right'
			}
		},

		{
			breakpoint: 1100,
			settings: {
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow: '.arrow-prev',
				nextArrow: '.arrow-right'
			}
		},
		{
			breakpoint: 480,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow: '.arrow-prev',
				nextArrow: '.arrow-right'
			}
		}
	]
});

$(function() {
	$('#tabs').tabs();
});
$(function() {
	$('#tabsone').tabs();
});
$(function() {
	$('#tabstwo').tabs();
});
$(function() {
	$('#tabsthree').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
	$('#tabsthree li').removeClass('ui-corner-top').addClass('ui-corner-left');
});

$(function() {
	$('#accordion').accordion({
		collapsible: true
	});
});
$(function() {
	$('#accordionone').accordion({
		collapsible: true
	});
});
$(function() {
	$('#accordiontwo').accordion({
		collapsible: true
	});
});
$(function() {
	$('#accordionthree').accordion({
		collapsible: true
	});
});

//galery

var QtyInput = (function() {
	var $qtyInputs = $('.qty-input');

	if (!$qtyInputs.length) {
		return;
	}

	var $inputs = $qtyInputs.find('.product-qty');
	var $countBtn = $qtyInputs.find('.qty-count');
	var qtyMin = parseInt($inputs.attr('min'));
	var qtyMax = parseInt($inputs.attr('max'));

	$inputs.change(function() {
		var $this = $(this);
		var $minusBtn = $this.siblings('.qty-count--minus');
		var $addBtn = $this.siblings('.qty-count--add');
		var qty = parseInt($this.val());

		if (isNaN(qty) || qty <= qtyMin) {
			$this.val(qtyMin);
			$minusBtn.attr('disabled', true);
		} else {
			$minusBtn.attr('disabled', false);

			if (qty >= qtyMax) {
				$this.val(qtyMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(qty);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function() {
		var operator = this.dataset.action;
		var $this = $(this);
		var $input = $this.siblings('.product-qty');
		var qty = parseInt($input.val());

		if (operator == 'add') {
			qty += 1;
			if (qty >= qtyMin + 1) {
				$this.siblings('.qty-count--minus').attr('disabled', false);
			}

			if (qty >= qtyMax) {
				$this.attr('disabled', true);
			}
		} else {
			qty = qty <= qtyMin ? qtyMin : (qty -= 1);

			if (qty == qtyMin) {
				$this.attr('disabled', true);
			}

			if (qty < qtyMax) {
				$this.siblings('.qty-count--add').attr('disabled', false);
			}
		}

		$input.val(qty);
	});
})();

//sidenav
function openNav() {
	document.getElementById('mySidenav').style.width = '420px';
}

function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
}

var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === 'block') {
			dropdownContent.style.display = 'none';
		} else {
			dropdownContent.style.display = 'block';
		}
	});
}
