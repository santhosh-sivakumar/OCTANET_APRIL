var menu_control = 1;
var settings_control = 1;
var theme_control = 1;

document.getElementById('menu-control').addEventListener("click", function()
{
    if(menu_control == 0)
    {
        menu_control = 1;
        document.getElementById('menu-control').innerHTML = '<i class="ri-arrow-up-s-line h1" id="menu-control"></i>';
        document.getElementById('menu').style.height = '30vh';
        document.getElementById('menu').style.padding = '2vh 2vh';
    }
    else
    {
        menu_control = 0;
        document.getElementById('menu-control').innerHTML = '<i class="ri-arrow-down-s-line h1" id="menu-control"></i>';
        document.getElementById('menu').style.height = '0';
        document.getElementById('menu').style.padding = '0 2vh';
    }
});

document.getElementById('menu').addEventListener("blur", function()
{

    menu_control = 0;
    document.getElementById('menu').style.height = '0';
    document.getElementById('menu').style.padding = '0 2vh';
});



document.getElementById('settings-control').addEventListener("click", function()
{
    if(menu_control == 0)
    {
        menu_control = 1;
        document.getElementById('settings').style.height = '30vh';
        document.getElementById('settings').style.padding = '2vh 2vh';
    }
    else
    {
        menu_control = 0;
        document.getElementById('settings').style.height = '0';
        document.getElementById('settings').style.padding = '0 2vh';
    }
});

document.getElementById('settings').addEventListener("blur", function()
{

    menu_control = 0;
    document.getElementById('settings').style.height = '0';
    document.getElementById('settings').style.padding = '0 2vh';
});

document.getElementById('theme_control').addEventListener("click", function()
{
    console.log("Yes")
    if(theme_control == 1)
    {
        theme_control = 0;
        document.body.style.backgroundPosition = 'right';
        document.querySelectorAll("*").forEach(function(element)
        {
            element.style.color = 'white';
        });
    }
    else
    {
        theme_control = 1;
        document.body.style.backgroundPosition = 'left';
        document.querySelectorAll("*").forEach(function(element){
            element.style.color = 'black';
        });
    }
});