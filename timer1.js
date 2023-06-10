const setTimer = function(userTimes) {
  const timers = userTimes;
  for (const time of timers) {
    setTimeout(() => {
      // console.log(Number(time) + 1);
      console.log(time);
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

// slice here to eliminate first two elements of process.argv
// array containing info about files (not arguments):
setTimer(process.argv.slice(2));


// TEST CODE
// For this app, we can think of at least these three edge cases to test for:

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.