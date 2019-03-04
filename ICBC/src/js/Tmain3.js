import $ from "jquery";
$(document).ready(function() {
  $("#tab_t li").mouseenter(function() {
    $("#tab_t li").removeClass("on");
    $(this).addClass("on");
    let sidnum = $("#tab_t li").index($(this));
    $("#tab_c > div").addClass("hide");
    // console.log($('#tab_c > div')[sidnum]);
    $($("#tab_c > div")[sidnum]).removeClass("hide");
  });
  $(".tzlc_main li")
    .mouseover(function() {
      // console.log((this));
      $(this).addClass("on");
    })
    .mouseout(function() {
      $(this).removeClass("on");
    });
});
