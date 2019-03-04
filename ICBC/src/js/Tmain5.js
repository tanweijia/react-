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
  $(".action_Y_main .l p")
    .mouseover(function() {
      // console.log((this));
      $(this).addClass("on");
    })
    .mouseout(function() {
      $(this).removeClass("on");
    });

  $("#action_Y_r li")
    .mouseover(function() {
      // console.log((this));
      $(this).addClass("on");
    })
    .mouseout(function() {
      $(this).removeClass("on");
    });

  $(".action_Y_more .l li")
    .mouseover(function() {
      // console.log((this));
      $(this).addClass("on");
    })
    .mouseout(function() {
      $(this).removeClass("on");
    });

  $("#action_Y_r li .kv_more")
    .mouseover(function() {
      // console.log((this));
      $(this).addClass("on");
    })
    .mouseout(function() {
      $(this).removeClass("on");
    });

  // 优惠活动轮播图
  var timer = null;
  var goleft = 0;
  var i = 0;
  clearInterval(timer);
  timer = setInterval(next, 2000);
  function next() {
    if (goleft <= 900) {
      $(".owl-wrapper").css({ left: -goleft + "px" });
      goleft = goleft + 450;
    }else{
      goleft = 0;
      $(".owl-wrapper").css({ left: "0px" });
    }
    if (i <= 2) {
      i = i + 1;
      $('.owl-page').removeClass('active');
      $($('.owl-page')[i]).addClass('active');
    }else{
      i=0;
      $('.owl-page').removeClass('active');
      $($('.owl-page')[0]).addClass('active');
      
    }
  }
});
