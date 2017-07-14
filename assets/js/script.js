function showMenu() {
	$( ".header-inner>ul.rightContent" ).animate({
    height: "100vh"
  }, 300);
	$("button.menu").attr("onclick","hideMenu()");
	$("button.menu").addClass("close").removeClass("open");
}

function hideMenu() {
	$( ".header-inner>ul.rightContent" ).animate({
    height: "0px"
  }, 150);
	$("button.menu").attr("onclick","showMenu()");
	$("button.menu").addClass("open").removeClass("close");
}

  $('.header-inner>ul.rightContent>li>a').click(function() {
		hideMenu();
	});
