export function showNotification(setter) {
    setter(true); // set to true
    setTimeout(() => {
        setter(false); // after 2 seconds, set to false
    }, 2000);
}

export function checkWin(correct, wrong, word) {
    let status = 'win';

    // change status based on what is found
    // check for win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)) { // if correct letter does not include a letter from word -> didn't win
            status = ''; // didn't lose
        }
    });

    // check for lose
    if(wrong.length === 6) status = 'lose'; // 6 chances

    return status;
}