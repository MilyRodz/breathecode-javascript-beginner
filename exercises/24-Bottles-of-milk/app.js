// Your code here:

function bottlesOfMilkSong () {
    var word = "bottles";
    var count = 99;
    var text = "";

    while (count > 0) {
        if (count == 1) {
            var word = "bottle"
        }
        console.log(count + " " + word + " of milk on the wall,")
        console.log(count + " " + word + " of milk,");
        console.log("Take one down, pass it around,");
        count = count -1;
        if (count > 0) {
            if (count == 1) {
                var word = "bottle"
            }
            else {
                 if (count == 0) {
                    var word = "bottles"
                    console.log("No more " + word + " of milk on the wall.");
                }
                
            }
        }
    }


    return count;
}

console.log(bottlesOfMilkSong());