var isPad = navigator.userAgent.match(/iPhone|Linux|Android|iPad|iPod|ios|iOS|Windows Phone|Phone|WebOS/i) != null;
document.writeln("<!-- Start topbar -->");
document.writeln("<div class=\"topbar\" style=\"postion:absolute;border-style:none;z-index:9999\" charset=\"utf-8\">");
document.writeln("<div class=\"content\" style=\"postion:absolute;border-style:none;z-index:9999\" charset=\"utf-8\">");
document.writeln("<ul class=\"menus fl\">");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<a><b class=\"fl\"><\/b><\/a>");
document.writeln("<li class=\"menu hoverhandler\">");
document.writeln("<a href=\"javascript:;\" class=\"link\" title=\"TV\"><span class=\"fl\">TV<\/span><b class=\"fl\"><\/b><\/a>");
document.writeln("<ul class=\"dropdownmenu fillet\">");
document.writeln("<b><\/b><br><\/br>");
document.writeln("<li><a  href=\"./?&f=\" rel=\"dropmenu1\" class=\"viemo\" title=\"首页\" >首页<\/a><\/li>");
document.writeln("<b><\/b><br><\/br>");
document.writeln("<li><a  href=\"./?s=2&f=\" rel=\"dropmenu1\" class=\"viemo\" title=\"央视\" >央视<\/a><\/li>");
document.writeln("<b><\/b><br><\/br>");
document.writeln("<li><a  href=\"./?s=1&f=\" rel=\"dropmenu1\" class=\"viemo\" title=\"卫视\" >卫视<\/a><\/li>");
document.writeln("<\/ul>");
document.writeln("<\/li>");
document.writeln("<\/div>");
document.writeln("<\/div>");
document.writeln("<\/topbar>");
document.writeln("<!-- End topbar -->")