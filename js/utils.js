function parseTime(time) {
  let days = turnToTwoDigits(Math.floor(time / (1000 * 60 * 60 * 24)));
  let hours = turnToTwoDigits(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = turnToTwoDigits(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = turnToTwoDigits(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, minutes, seconds };
}

function turnToTwoDigits(number) {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

export { parseTime };
