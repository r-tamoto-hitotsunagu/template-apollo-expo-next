import type { InputMaybe, OutputMaybe } from '$type';

export const formatDate = (date: InputMaybe<Date>): OutputMaybe<string> => {
  if (!date) {
    return null;
  }

  return formatDateYMD(date, '-');
};

const formatDateYMD = (date: Date, split: '-' | '/'): string => {
  const y = date.getFullYear();
  const m = convertZeroPad(date.getMonth() + 1);
  const d = convertZeroPad(date.getDate());

  return `${y}${split}${m}${split}${d}`;
};

const convertZeroPad = (month: number) => {
  return month.toString().padStart(2, '0');
};
