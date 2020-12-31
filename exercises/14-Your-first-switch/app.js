function getColor(selection) {
    //const color = selection.toLowerCase();
    var text = selection;
   // text = selection;
    var exist = false;

    switch (text.trim().toLowerCase()) {
        case 'red' : 
            exist = true;            
            break;
        case 'green' : 
            exist = true;
            break;
        case 'blue' : 
            exist = true;
            break;
        default: 
            exist = false;  //returns false because the user picked an unavailable color
    }   

    return exist;
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if (isAvailable)
    console.log('Good news! That color is available');
else
    console.log('We are sorry, that color is not available');
