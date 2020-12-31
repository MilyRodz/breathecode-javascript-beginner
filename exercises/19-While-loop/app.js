
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
        counter--;
        if (counter == 0){
            console.log('0');
            break;
        }
        
		console.log(counter);
	}
	
	return counter;
}

startCounting();