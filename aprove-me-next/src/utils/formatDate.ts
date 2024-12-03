import { format, toZonedTime } from "date-fns-tz";

export const formatDateBR = (isoDate: string): string => {
  const timeZone = "America/Sao_Paulo";
  const zonedDate = toZonedTime(new Date(isoDate), timeZone);
  return format(zonedDate, "dd/MM/yyyy 'às' HH:mm", { timeZone });
};