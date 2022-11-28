function prevImage()
{
    picNow = document.getElementById("pic").src;
    changePic(picNow, -1);
}

function nextImage()
{
    picNow = document.getElementById("pic").src;
    changePic(picNow, 1);
}

function changePic(currentPic, amount)
{
    images = document.querySelectorAll("img");
    picNow = picNow.substring(currentPic.length - 5, currentPic.length - 4);
    picNumber = parseInt(picNow) + amount;
    pic = "/Images/Landscape-" + (picNumber) + ".jpg";

    if(picNumber > 0 && picNumber < 4)
    {
        document.getElementById("pic").src = pic;
    }
}