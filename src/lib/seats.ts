/** 日付に応じた今月残り受付社数を返す（1〜5社） */
export function getAvailableSeats(): number {
  const day = new Date().getDate();
  if (day <= 5) return 5;
  if (day <= 10) return 4;
  if (day <= 15) return 3;
  if (day <= 20) return 2;
  return 1;
}
