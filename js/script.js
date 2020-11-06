// // Set up some variables

var locations = $(".location");
var pager = $('.pager');
var slideshow = $('.slideshow-container');

// // Highlight location with mouse over

$(locations).mouseenter(
	function(){
		var thisMapName = (this.id+"MN");
		// console.log("show id: "+thisMapName);
		// $(locations).not(this).css("opacity", ".39");
		$(this).css('cursor', 'pointer');
		$("#"+thisMapName).fadeTo("opacity", "1");
	}
);

$(locations).mouseleave(
	function(){
		var thisMapName = (this.id+"MN");
		// console.log("exit: "+this.id);
		// $(locations).css("opacity", "1");
		$(this).css('cursor', 'default');
		$("#"+thisMapName).fadeTo("opacity", "0");
	}
);

// // Location Click Listener

$(locations).click(
	function(){
		$('#foreClick').css("display", "none");
		$('#locationPopup').css("visibility", "visible");
		var thisAudio = ("audio/"+this.id+".mp3");
		var speaker = $(this).data("speaker");
		var count = $(this).data("count");

		// empty out pager and slideshow
		$('.dot').remove();
		$('.mySlides').remove();

		// helper function to deal with for-loop scope of `i`
		function handlePagerClick(index) {
			return function() {
				currentSlide(index);
			}
		}

		var i;
		for (i = 1; i <= count; i++) {
			// populate pager
			var pagerDot = $('<span />').addClass('dot');
			pagerDot.click(handlePagerClick(i));
			pager.append(pagerDot);

			// populate slideshow
			var newSlide = $('<div />').addClass('mySlides fade');
			var newImg = $('<img />').addClass('photoS').attr('src', `images/${this.id}-${i}.jpg`);
			newSlide.append(newImg);
			slideshow.append(newSlide);
		}
		
		console.log(count);
		console.log(speaker);
		changeTrack(thisAudio);
		currentSlide(1);
		$('.lSpeaker').text(speaker);
	}
);

// Closing the PopUp and pausing the audio
function closeBox() {
  $('#locationPopup').css("visibility", "hidden");
  pauseTrack();
}

// function to pause audio player on eon clicking the X

function pauseTrack(sourceUrl) {
    var audioDues = $("#player");      
    audioDues[0].pause();
    audioDues[0].load();//suspends and restores all audio element
}

// function to reload audio player on each click

function changeTrack(sourceUrl) {
    var audioDues = $("#player");      
    $("#lAudio").attr("src", sourceUrl);
    audioDues[0].pause();
    audioDues[0].load();//suspends and restores all audio element
    audioDues[0].play();
}
    
//Animating the slide show

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}