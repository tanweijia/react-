import $ from jQuery;
$.ajax({
  url: "/HtmlPatch/ICBC/shouye/xuanchuan/gonggao.htm",
  type: "get",
  cache: true,
  async: false,
  success: function(html) {
    $(
      "#webpartdivID2633a30e-8654-4ac3-94b0-b3f5b424b8ba636861698918039744"
    ).append(html);
  }
});
