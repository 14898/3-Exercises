function prevImage()
{
    picNow = document.getElementById("pic").src;
    if(picNow.includes("Landscape-2"))
    {
       document.getElementById("pic").src = "/Images/Landscape-1.jpg"
    }
    else if(picNow.includes("Landscape-3"))
    {
        document.getElementById("pic").src = "/Images/Landscape-2.jpg"
    }
}

function nextImage()
{
    picNow = document.getElementById("pic").src;
    if(picNow.includes("Landscape-2"))
    {
       document.getElementById("pic").src = "/Images/Landscape-3.jpg"
    }
    else if(picNow.includes("Landscape-1"))
    {
        document.getElementById("pic").src = "/Images/Landscape-2.jpg"
    }
}