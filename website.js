var main = function(){	
	
	/* Keep navbar in view */
	$(document).scroll(function(){
		scrollAmt = $(document).scrollTop();
		threshold = $("#name").height();
		
		if(scrollAmt >= threshold){
			$("#nav").css({"position":"fixed","top":"0px","height":"10%"});
		} else {
			$("#nav").css({"position":"relative","top":"","height":"40%"});
		}
	});
	
	/* Control navbar link scrolling */
	$("#navtable span").click(function(){
		var location = $(this).text().charAt(0);
		var pos = 0;
		switch(location){
			case 'C':
				pos = $("#contacts").offset().top;
				break;
			case 'R':
				pos = $("#research").offset().top;
				break;
			case 'E':
				pos = $("#employment").offset().top;
				break;
			case 'P':
				pos = $("#projects").offset().top;
				break;
		}
		
		//Subtract the height that the navbar will have upon scroll
		//We can't just use navbar.height because its height changes slightly when it's fixed to the top of the page
		pos -= ($(window).height() * 0.1);
		$(document).scrollTop(pos);
	});
	
	/* Hilbert */
	$("#hilbert").hover(function(){
		$("#hilbert .projectimage").css({"box-shadow":"0px 0px 4px 1px #4caf50"});
	},
	function(){
		$("#hilbert .projectimage").css({"box-shadow":""});
	});
	
	/* LSystem */
	$("#lsystem").hover(function(){
		$("#lsystem .projectimage").css({"box-shadow":"0px 0px 4px 1px #ef6c6c"});
	},
	function(){
		$("#lsystem .projectimage").css({"box-shadow":""});
	});
	
	/* LitePoint */
	$("#litepoint").hover(function(){
		$("#litepoint .employerimage").css({"box-shadow":"0px 0px 4px 1px #f7981e"});
	},
	function(){
		$("#litepoint .employerimage").css({"box-shadow":""});
	});
	
	/* Market */
	$("#market").hover(function(){
		$("#market .projectimage").css({"box-shadow":"0px 0px 4px 1px #66cdef"});
	},
	function(){
		$("#market .projectimage").css({"box-shadow":""});
	});
	
	/* Ray tracer */
	$("#raytracer").hover(function(){
		$("#raytracer .projectimage").css({"box-shadow":"0px 0px 4px 1px #c2665f"});
	},
	function(){
		$("#raytracer .projectimage").css({"box-shadow":""});
	});
	
	/* Relativity */
	$("#relativity").hover(function(){
		$("#relativity .projectimage").css({"box-shadow":"0px 0px 4px 1px #7878c8"});
	},
	function(){
		$("#relativity .projectimage").css({"box-shadow":""});
	});
	
	/* RentMate */
	$("#rentmate").hover(function(){
		$("#rentmate .projectimage").css({"box-shadow":"0px 0px 4px 1px #66a3ff"});
	},
	function(){
		$("#rentmate .projectimage").css({"box-shadow":""});
	});
	
	/* UC Davis */
	$("#ucdavis").hover(function(){
		$("#ucdavis .employerimage").css({"box-shadow":"0px 0px 4px 1px #336e9d"});
	},
	function(){
		$("#ucdavis .employerimage").css({"box-shadow":""});
	});
	
	/* Contact links */
	$("#contacttable td").hover(function(){
		$(this).find(".contactinfo").animate({opacity: 1},{duration:200, queue: false});
	},
	function(){
		$(this).find(".contactinfo").animate({opacity: 0},{duration:200, queue: false});
	});
	
};

$(document).ready(main);