function getRandomColourName() 
{
    colours = ["aqua", "black", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];
    colourNumber = Math.floor(Math.random() * 16);
    return colours[colourNumber];
}

function getRandomColourHex() 
{
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function getRandomColourHexShort() 
{
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function changeColour1()
{
    colour = getRandomColourName();
    document.body.style.background = colour;
    document.getElementById("textColour1").innerText = colour;
}

function changeColour2()
{
    colour = getRandomColourHex();
    document.getElementById("colour2").style.backgroundColor = colour;
    document.getElementById("textColour2").innerText = colour;
}

function changeColour3()
{
    colour = getRandomColourHexShort();
    document.getElementById("colour3").style.backgroundColor = colour;
    document.getElementById("textColour3").innerText = colour;
}