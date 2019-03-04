import $ from "jquery";
$(document).ready(function() {
    let isok = true;
    $('.show-btn').click(function(){
        if(isok){
            $('#add_address').css("display","block");
            isok = !isok;
        }else{
            $('#add_address').css("display","none");
            isok = !isok;
        }
        
    });
});
