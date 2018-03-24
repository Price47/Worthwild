/**
 * Created by rockstar645 on 11/21/17.
 */
var HEADER_MENU_HOVER_COLOR = '#60e9ff';
var HEX_CLASS_MAP = {
    '#60e9ff': 'light-blue-font',
    '#1eff56': 'green-font',
    '#ff1e1e': 'red-font',
    '#ff651e': 'orange-font'
};

$(document).ready(function(){

    var mapToggled = false;
    var mapTab = $('#map_tab');
    var menu = $('#menu');
    var headerMapButton = $('#header_map_button');
    var headerMenuButton = $('#home_link');
    var menuClose = $('#menu_close');
    var headerDropdownItems = $('#header_dropdown a');
    var homeIcon = $('#map_icon');
    var classes = 'light-blue-font orange-font green-font red-font';

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

    $('#menu_list li').each(function(){
        $(this).hover(
            function(){
                $(this).css('background','black')
            },
            function(){
                $(this).css('background', '#111111')
            })
    });

    headerMenuButton.hover(
        function(){
            $(this).css('background', HEADER_MENU_HOVER_COLOR);
            homeIcon.removeClass(classes);
            homeIcon.addClass('grey-font');
        }, function(){
            $(this).css('background', '#1a1b1c');
            homeIcon.removeClass(classes);
            homeIcon.addClass(HEX_CLASS_MAP[HEADER_MENU_HOVER_COLOR]);
        });

    headerDropdownItems.each(function(){
       $(this).hover(
           function(){
                $(this).css('background', HEADER_MENU_HOVER_COLOR);
           },function(){
                $(this).css('background','black');
           }
       )
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

function updateColors(className, hex){
    var homeLink = document.getElementById("home_link");
    var header_items = $('#map_icon, #menu_button');
    var classes = 'light-blue-font orange-font green-font red-font';

    header_items.removeClass(classes);
    header_items.addClass(className);
    homeLink.style.borderRight = '3px solid ' + hex;
    HEADER_MENU_HOVER_COLOR = hex;
}

function changeControlFunction(control) {
    switch (control) {
        case 'home':
            updateColors('light-blue-font', '#60e9ff');
            break;
        case 'about':
            updateColors('green-font', '#1eff56');
            break;
        case 'privacy':
            updateColors('red-font', '#ff1e1e');
            break;
        case 'contact':
            updateColors('orange-font', '#ff651e');
            break;
        default:
            updateColors('light-blue-font', '#60e9ff');

    }
}

