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
        map = document.getElementById('header_map_button');
        back = document.getElementById('header_back_button');
        if(control.search('home')==-1){
            map.style.display = 'none';
            back.style.display = 'inline';
        }
        else{
            back.style.display = 'none';
            map.style.display = 'inline'
        }
    }

function openMenu(){
    console.log('OPENING MENU FUCKING FINALLY')
}