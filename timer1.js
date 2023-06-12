const setTimer = function(userTimes) {
  for (const time of userTimes) {
    setTimeout(() => {
      // console.log(Number(time) + 1);
      console.log(time);
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

// Slice (below) eliminates first two elements of process.argv
// array containing info about files (not arguments):

// Note that adding this filter logic as an if statement actually
// broke the code. This is the only solution I've found for handling
// non-number values and negative values.

setTimer(process.argv.slice(2).filter(time => time > 0).filter(time => !isNaN(time)));

// EDGE CASES
// For this app, we can think of at least these three edge cases to test for:

// 1) No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2) An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3) An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// For case 1, run in terminal: node timer1.js (process terminates without argument)

// For cases 2 and 3: run node timer1.js -1 "apple" 3 (no timer created for first two value; valid timer beeps after 3 seconds)