function convertMiliseconds(miliseconds: number) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = Math.floor(miliseconds / 1000);
  total_minutes = Math.floor(total_seconds / 60);
  total_hours = Math.floor(total_minutes / 60);
  days = Math.floor(total_hours / 24);

  seconds = total_seconds % 60;
  minutes = total_minutes % 60;
  hours = total_hours % 24;

  return { d: days, h: hours, m: minutes, s: seconds };
}

export default convertMiliseconds;
