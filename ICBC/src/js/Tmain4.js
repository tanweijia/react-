import $ from "jquery";
$(document).ready(function() {
  $("#tab_tt li").mouseenter(function() {
    $("#tab_tt li").removeClass("on");
    $(this).addClass("on");
    let sidnum = $("#tab_tt li").index($(this));
    $("#tab_ct > div").addClass("hide");
    console.log(sidnum);
    $($("#tab_ct > div")[sidnum]).removeClass("hide");
  });
  $(".bljr_mainR li")
    .mouseover(function() {
      // console.log((this));
      $(this).addClass("on");
    })
    .mouseout(function() {
      $(this).removeClass("on");
    });
});