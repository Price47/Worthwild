/**
 * Created by rockstar645 on 11/21/17.
 */
$(document).ready(function(){
    var mapToggled = false;
    var mapTab = $('#map_tab');
    var menu = $('#menu');
    var headerMapButton = $('#header_map_button');
    var headerMenuButton = $('#header_menu_button');
    var menuClose = $('#menu_close');


    function toggle_map(selector){
        if(mapToggled){
            $(selector).animate({
                height: '-=500px'});
            $('#modal_div').css('display','none');
            mapToggled=false
        }
        else{
            $(selector).animate({
                height: '+=500px'});
            $('#modal_div').css('display','inline');
            mapToggled=true
        }
    }

    $('#modalClose').click(function(){
        $('#modal_div').css('display','none');
    });

    mapTab.hover(
        function(){
            $(this).css('background','#ddd')
    },
        function(){
            $(this).css('background','#ececec')
    });

    mapTab.click(
        function(){
            $(this).css('height','500px');
            toggle_map();
            mapModal('map_tab_map_div')

    });

    headerMapButton.click(
        function(){
            $('#modal_div').css('display', 'inline');
            mapModal('map_tab_map_div')

    });

    menuClose.click(
        function(){
            $("#menu_content").css('display','none');
            menu.animate({width:'-=35%'}, 'slow');
            menu.css('display','none');
        }
    );

    headerMenuButton.click(
        function(){
            console.log("hutdrykftguy");
            menu.animate({width:"+=35%"});
            menu.css('display','inline');
    });

    $('#menu_list li').each(function(){
        $(this).hover(
            function(){
                $(this).css('background','black')
            },
            function(){
                $(this).css('background', '#111111')
            })
    });

    $('.menu-card').each(function(){
        $(this).hover(
            function(){
                $(this).find('img').css('filter', 'opacity(65%)')
            },function(){
                $(this).find('img').css('filter', 'opacity(0%)')

            })
    })
});

function changeControlFunction(control){
    var classes = 'light-blue-font orange-font green-font red-font';
    var homeLink = document.getElementById("home_link")
    var header_items = $('#map_icon, #menu_button');
        switch (control){
            case 'home':
                header_items.removeClass(classes);
                header_items.addClass('light-blue-font');
                homeLink.style.borderRight = '3px solid #60e9ff';
                break;
            case 'about':
                header_items.removeClass(classes);
                header_items.addClass('green-font');
                homeLink.style.borderRight = '3px solid #1eff56';
                break;
            case 'privacy':
                header_items.removeClass(classes);
                header_items.addClass('red-font');
                homeLink.style.borderRight = '3px solid #ff1e1e';
                break;
            case 'contact':
                header_items.removeClass(classes);
                header_items.addClass('orange-font');
                homeLink.style.borderRight = '3px solid #ff651e';
                break;
            default:
                header_items.removeClass(classes);
                header_items.addClass('light-blue-font');
                homeLink.style.borderRight = '3px solid #60e9ff';

        }
    };

