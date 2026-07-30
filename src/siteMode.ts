// Corporate (career-only) is the default — at the root domain and at /hire.
// Visiting /all shows the full site — consulting, travel, and money coaching too.
export const isCorporateSite = !window.location.pathname.startsWith("/all");
