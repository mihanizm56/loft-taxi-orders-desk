export const timeFormatter = (timeValue: string): string => {
  const dateUTC = new Date(timeValue);
  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return formatter.format(dateUTC);
};
