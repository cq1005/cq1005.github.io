<!DOCTYPE html><html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>tv</title>
<script type="text/javascript"> $.getJSON('flss,function(jsondata)'){ });</script>
<script>
<!--  
function getId( s ) { var re = new RegExp( s + "=([^\&]*)"); re.exec(document.location.href); return RegExp.$1;}  
//-->
function height(){  var height=document.documentElement.clientHeight; return height; }
function flss(){
var flss = getId('url')?getId('url'):getId('f')?getId('f'):"http://live.xinhuashixun.com/live/chn01/desc.m3u8";
return flss;
}
var src0 = 'https://go.yh0523.cn/y.cy?url=' + flss();
</script>
</head>
<body style="overflow-y:hidden;height:100%;">
<div align="center">
<script>
document.write('<iframe src = " '+ src0 + '"  id="WANG"  width="100%" height="' + height() +'" frameborder="0" scrolling="yes"></iframe>');
window.focus();
</script>
</div>
</body>
</html>
