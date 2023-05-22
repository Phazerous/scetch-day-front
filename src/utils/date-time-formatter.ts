export const getFormattedTimeFromMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  minutes = minutes - hours * 60;

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  return formattedTime;
};
