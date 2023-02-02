/*function myFunction()
{
    document.getElementById("hamburger").addEventListener("click", function ()
    {
        document.getElementById("dropdownID").classList.toggle("show");
    });
}*/

const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdownID");

hamburger.addEventListener("click", function ()
{
    dropdown.classList.toggle("show");

});

window.onclick = function (event)
{
    if (!event.target.matches('.hamburgerBtn'))
    {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++)
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.toggle("show");
            }
        }
    }
}