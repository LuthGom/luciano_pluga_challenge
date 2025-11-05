export function getTotalPages(totalItems: number, perPage: number) {
  return Math.max(1, Math.ceil(totalItems / perPage));
}

export function clampPage(page: number, totalPages: number) {
  if (!Number.isFinite(page) || Number.isNaN(page)) return 1;
  return Math.min(Math.max(1, Math.floor(page)), totalPages);
}