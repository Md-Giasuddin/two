$(document).ready(function(){
    $("span.red_color").click(function(){
        $("body").addClass("red_color_body").removeClass("green_color_body");
    });
	 $("span.green_color").click(function(){
        $("body").addClass("green_color_body").removeClass("red_color_body");
    });
}); 