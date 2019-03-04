function TimeDemo() {
  var d,
    s = "",
    c = "";
  d = new Date();
  s += parseInt(Date.parse(d) / (1000 * 3600)) + c;
  return s;
}
var tocken = TimeDemo();
var write_str =
  "<script language='javascript' type='text/javascript' src='http://www.icbc.com.cn/ICBC_ADJS/4DEAE11D862C4E0AAB17D1AEFFCA99AF.js?Ad_Top=0&Ad_Left=0&Ad_ChooseMode=1&Ad_Width=100%&Ad_Height=380&Ad_IsClose=False&Ad_Guid=028c37ed315c46dbb6a81f33b297b0a1&Ad_AreaId=5d5e0276-a4f7-4e48-9e47-09a181ca04c6&Ad_RealAreaName=主图_个人首页主图_1900_380&Ad_AreaName=028c37ed315c46dbb6a81f33b297b0a1%e4%b8%bb%e5%9b%be_%e4%b8%aa%e4%ba%ba%e9%a6%96%e9%a1%b5%e4%b8%bb%e5%9b%be_1900_380&Ad_Source=%e4%b8%bb%e5%9b%be_%e4%b8%aa%e4%ba%ba%e9%a6%96%e9%a1%b5%e4%b8%bb%e5%9b%be_1900_380&AD_tocken=" +
  tocken +
  "&Ad_ZoneNo=0'></script>";
if (typeof ICBCADByZoneUtil != "undefined") {
  var adfileSuffix = ICBCADByZoneUtil.GetADFileNameSuffix(
    "4DEAE11D862C4E0AAB17D1AEFFCA99AF",
    ICBCADByZoneUtil.GetClientZoneNo()
  );
  var adfileName = ICBCADByZoneUtil.GetADFileName(
    "4DEAE11D862C4E0AAB17D1AEFFCA99AF",
    adfileSuffix
  );
  write_str =
    "<script language='javascript' type='text/javascript' src='http://www.icbc.com.cn/ICBC_ADJS/" +
    adfileName +
    ".js?Ad_Top=0&Ad_Left=0&Ad_ChooseMode=1&Ad_Width=100%&Ad_Height=380&Ad_IsClose=False&Ad_Guid=028c37ed315c46dbb6a81f33b297b0a1&Ad_AreaId=5d5e0276-a4f7-4e48-9e47-09a181ca04c6&Ad_RealAreaName=主图_个人首页主图_1900_380&Ad_AreaName=028c37ed315c46dbb6a81f33b297b0a1%e4%b8%bb%e5%9b%be_%e4%b8%aa%e4%ba%ba%e9%a6%96%e9%a1%b5%e4%b8%bb%e5%9b%be_1900_380&Ad_Source=%e4%b8%bb%e5%9b%be_%e4%b8%aa%e4%ba%ba%e9%a6%96%e9%a1%b5%e4%b8%bb%e5%9b%be_1900_380&AD_tocken=" +
    tocken +
    "&Ad_ZoneNo=" +
    adfileSuffix +
    "'></script>";
}
document.write(write_str);
