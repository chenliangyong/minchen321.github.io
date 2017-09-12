//------------- Narbar collapse-------------------------
$(document).ready(function () {
	  $(".navbar-nav li a").click(function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });
});

//------------------- home ------------------------------
$(function(){
	$("#head-title").typed({
	    strings: ["Hi! I'm Min.", "I'm a creative web developer from New York City."],
	    typeSpeed: 100,
	    loop: true,
	    startDelay: 100
	});
});
// ------------------ about-me ------------------------	
$(document).ready(function() {
	$('#developer').mouseover(function () {
		$('#developer-bg').show("slide", {direction: "down"}, 200);
			}).mouseout(function () {
				$('#developer-bg').hide();
	});

	$('#me').mouseover(function () {
		$('#me-bg').show("slide", {direction: "down"}, 200);
			}).mouseout(function () {
			$('#me-bg').hide();
	});


	$("#developer-slide").hide();
	$("#me-slide").hide();

	$("#developer-button").click(function () {
      $("#roles").hide();
      $("#developer-slide").show("slide", {direction: "left"}, 500);
	});

	$("#me-button").click(function () {
      $("#roles").hide();
      $("#me-slide").show("slide", {direction: "right"}, 500);
	});

	$(".back").click(function () {
      $("#roles").show("slide", { direction: "right" }, 500);
      $("#developer-slide").hide();
      $("#me-slide").hide();
	});

// --------------- portfolio -----------------
	$("#photography").hide();
	$("#graphic-design").hide();

	$("#web-portfolio").click(function () {
		$("#photography").hide();
		$("#graphic-design").hide();
	    $("#web").fadeIn();
	});

	$("#design-portfolio").click(function () {
		$("#web").hide();
		$("#photography").hide();
	    $("#graphic-design").fadeIn();
	});

	$("#photography-portfolio").click(function () {
		$("#web").hide();
		$("#graphic-design").hide();
	    $("#photography").fadeIn();
	});

});

/* --------------- Card Style Script ------------------- */									
			$(document).ready(function() {
				'use strict';
				var $el 			= $( '#baraja-el' ),
					sectionFeature  = $('#photos'),
					baraja 			= $el.baraja();
				
					if ( $(window).width() > 480) {
						sectionFeature.appear(function(){
							baraja.fan({
								speed : 1500,
								easing : 'ease-out',
								range : 100,
								direction : 'right',
								origin : { x : 50, y : 200 },
								center : true
							});
						});
						$('#nav-fan5').click(function() {
							baraja.fan({
								speed : 500,
								easing : 'ease-out',
								range : 100,
								direction : 'right',
								origin : { x : 50, y : 200 },
								center : true
							});
						}); 
					}
					else {
						$('#nav-fan5').click(function() {
							baraja.fan({
								speed : 500,
								easing : 'ease-out',
								range : 100,
								direction : 'left',
								origin : { x : 50, y : 70 },
								center : true
							});
						});
					}

				$('#nav-prev').on( 'click', function( event ) {
					baraja.previous();
				});

				$('#nav-next').on( 'click', function( event ) {
					baraja.next();
				});
				
				$('#close').on( 'click', function( event ) {
					baraja.close();
				});	
			});

/* ----------------------------- 
Portfolio Projects
----------------------------- */	
		var slideIndex = 1;
		showDivs(slideIndex);

		function plusDivs(n) {
		  showDivs(slideIndex += n);
		}

		function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("mySlides");
		  if (n > x.length) {
		  	slideIndex = 1;
		  }    
		  if (n < 1) {
		  	slideIndex = x.length;
		  }
		  for (i = 0; i < x.length; i++) {
		      x[i].style.display = "none";  
		  }
		  x[slideIndex-1].style.display = "block";  
		}

		var description = new Array();
		description[0] = ["DishFinder", "Dish Finder is a JavaScript web application. It allows the users to write/see reviews for a specific item on a restaurant menu.", "HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Handlebars.js(template engine), MongoDB"];

		description[1] = ["Payoment", "A company website for Payoment Merchant Serivices", "HTML, CSS, JavaScript, Bootstrap"];

		description[2] = ["Surtom", "A company website for Surtom Construction Contracting Corp", "HTML, CSS, JavaScript, jQuery, Bootstrap"];

		description[3] = ["CUNYPlus", "A communication platform to connect CUNY students by their areas of study.", "HTML, CSS, JavaScript, jQuery, Bootstrap"];

		description[4] = ["Smart Capital", "A company website for Smart Capital Corporation.", "HTML, CSS, JavaScript, Wordpress"];

		description[5] = ["Movie Quiz", "A Node.js movie quiz game with responsive front-end design.", "HTML, CSS, JavaScript, jQuery, Bootstrap"];

		description[6] = ["RecipeBook", "A JavaScript web application allows users to manage their online recipes.", "HTML, CSS, JavaScript, Node.js, Dust (template engine), Postgres"];

		$(document).ready(function() {
			var project = document.getElementById('project');
			var intro = document.getElementById('intro');
			var tech = document.getElementById('tech-stack');
			var counter = 0;

			project.innerHTML= description[counter][0];
			intro.innerHTML = description[counter][1];
			tech.innerHTML = description[counter][2];

		    $("#next-project").click(function () {
		    	counter++;
		    	if(counter > 6){
					counter=0;
				}
				project.innerHTML= description[counter][0];
				intro.innerHTML = description[counter][1];
				tech.innerHTML = description[counter][2];
			});

			$("#previous-project").click(function () {
		    	counter--;
		    	if(counter < 0){
					counter=6;
				}
				project.innerHTML= description[counter][0];
				intro.innerHTML = description[counter][1];
				tech.innerHTML = description[counter][2];
			});
		});
