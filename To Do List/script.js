var menu_control = 1;


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