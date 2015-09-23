$('ul.nav.nav-pills li').click(function() {			
    $(this).parent().addClass('active').siblings().removeClass('active');			
});