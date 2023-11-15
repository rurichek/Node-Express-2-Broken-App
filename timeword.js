

    // Get the time string from the command line arguments
    const timeInput = process.argv[2];

    if (timeInput) {
        console.log(timeWord(timeInput));
    } else {
    console.log('Please provide a time in the format "HH:MM".');
    }

function timeWord(stringTime) {


    // Define what each number is
    const hours = [
        'twelve', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve'
    ];

    const minutes = [
        '', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const tensMinutes = [
        '', '', 'twenty', 'thirty', 'forty', 
        'fifty'
    ];

    // split the stringTime into hours and minutes
    let [hour, minute] = stringTime.split(':').map(str => parseInt(str, 10));
    let result = '';

    // Convert hour from 0-23 to 1-12 format and get the word
    hour = hour % 12;
    result += hours[hour] || 'twelve'; // account for 0 or 12 as twelve

    // special case for o'clock and midnight
    if (minute === 0) {
        if (hour === 0) {
            result = 'midnight';
        } else {
            result += ' o\'clock';
        }

    } else {
        // Handle minutes below 20
        if (minute < 20) {
            result += ' ' + minutes[minute];
        } else {
            // Tens and ones place for mintes above 19
            let tensPlace = Math.floor(minute / 10);
            let onesPlace = minute % 10;
            result += ' ' + tensMinutes[tensPlace];
            if (onesPlace > 0) {
                result += '-' + minutes[onesPlace];
            }
        }
    }


    


    return result; 
}