const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "MSL",
				weight: 9.5
			}, {
				text: "css",
				weight: 8.5
			}, {
				text: "JavaScript",
				weight: 10
			},  {
				text: "programming",
				weight: 9
			},  {
				text: "HTML",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700;
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a beginner Front-End Web Developer.", "love creating with code!", "also teach programming to people.", "enjoy solving problems problems.", "am a proud American!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 20,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#3F4045", "background-color": "#ffffff"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();


function onClick(element) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
  }


  