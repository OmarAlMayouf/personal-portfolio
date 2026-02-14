/**
 * Calculate the duration between two dates
 * @param startDate - Start date in format "YYYY-MM" or "YYYY-MM-DD"
 * @param endDate - End date in format "YYYY-MM" or "YYYY-MM-DD", or null for current date
 * @returns Formatted duration string (e.g., "1 year 6 months", "8 months")
 */
export function calculateDuration(startDate: string, endDate: string | null = null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const parts: string[] = [];
  
  if (years > 0) {
    parts.push(`${years} year${years !== 1 ? 's' : ''}`);
  }
  
  if (months > 0) {
    parts.push(`${months} month${months !== 1 ? 's' : ''}`);
  }
  
  return parts.length > 0 ? parts.join(' ') : '1 month';
}

/**
 * Format a period string with auto-calculated duration
 * @param startDate - Start date in format "YYYY-MM"
 * @param endDate - End date in format "YYYY-MM", or null for "Present"
 * @returns Formatted period string (e.g., "Feb 2026 – Present · 6 months")
 */
export function formatPeriod(startDate: string, endDate: string | null = null): string {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const start = new Date(startDate);
  const startMonth = monthNames[start.getMonth()];
  const startYear = start.getFullYear();
  
  let endString: string;
  if (endDate) {
    const end = new Date(endDate);
    const endMonth = monthNames[end.getMonth()];
    const endYear = end.getFullYear();
    endString = `${endMonth} ${endYear}`;
  } 
  else endString = "Present";
  
  const duration = calculateDuration(startDate, endDate);
  
  return `${startMonth} ${startYear} – ${endString} · ${duration}`;
}
