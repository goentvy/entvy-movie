/* "20250828" 형식의 날짜 필터링 - Movie App API Url 사용 */
export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate() - 1).padStart(2, '0');
    return year + month + day;
}