$(document).ready(function(){

	/* JS For mobile view menu */
	$( ".fa-times" ).hide();
    $( ".nav-menu" ).hide();
    jQuery('.fa-bars').click(function(){
        jQuery('.nav-menu').slideToggle(function() {
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
          });
    });

    jQuery(".fa-times" ).click(function() {
        jQuery( ".nav-menu" ).slideToggle(function() {
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });
    });

    $(".fa-bars").click(function(){
        $("body").addClass("stop-scroll");
    });
    $(".fa-times").click(function(){
    	$("body").removeClass("stop-scroll");
	});


	/* Slider for Banner Section*/
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 773,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$('.project-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 776,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 488,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 383,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});