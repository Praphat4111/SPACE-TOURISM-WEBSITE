$(function(){
    $(".toggle").on("click", function(){
        
        if($("nav").hasClass("active")){
            $("nav").removeClass("active");
            $(this).html("<i class='fas fa-bars'></i>");
        } else{
            $("nav").addClass("active");
            $(this).html("<i class='fas fa-times'></i>");
            // $(this).css()
        }
    })
    
    // if($("a").hasClass("active")){
    //     $("a").removeCss("height","3px");
    //     // $("a:after").css("background-color","blue");
    //     // $("li").addClass(".b");       
    // }

    
    
})


