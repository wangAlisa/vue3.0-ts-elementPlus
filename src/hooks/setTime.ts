export const useTime = (): any => {
  const dt = new Date();

  const formatDateTime = function (date: any = dt): any {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${y}-${m}-${d}`;
  };
  return { dt, formatDateTime };
};
