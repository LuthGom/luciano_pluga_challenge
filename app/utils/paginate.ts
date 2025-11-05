import { PaginationResult } from "../types";
import { clampPage, getTotalPages } from "./pagination";

export default function paginate<T>(items: T[], page = 1, perPage = 12): PaginationResult<T> {
  const totalPages = getTotalPages(items.length, perPage);
  const currentPage = clampPage(page, totalPages);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const data = items.slice(startIndex, endIndex);

  return {
    data,
    currentPage,
    perPage,
    totalPages,
    startIndex,
    endIndex,
  };
}

