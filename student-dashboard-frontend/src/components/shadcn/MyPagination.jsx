// components/shadcn/MyPagination.jsx
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MyPagination = ({
  totalItems,
  itemsPerPage = 4,
  onPageChange,
  currentPage: currentPageProp,
}) => {
  const [currentPage, setCurrentPage] = useState(currentPageProp || 1);

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  // sync external currentPage prop into internal state
  useEffect(() => {
    if (typeof currentPageProp === "number") {
      // clamp to valid range
      const clamped = Math.min(Math.max(1, currentPageProp), totalPages);
      setCurrentPage(clamped);
    }
  }, [currentPageProp, totalPages]);

  // keep parent informed when internal page changes
  const handlePageChange = (page) => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(clamped);
    if (onPageChange) onPageChange(clamped);
  };

  // Smart pagination range logic
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // how many numbers to show around current

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("left-ellipsis");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("right-ellipsis");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination className="">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={`${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            } hover:bg-(--color-purple)`}
          />
        </PaginationItem>

        {getPageNumbers().map((p, i) => {
          if (typeof p === "string") {
            return (
              <PaginationItem key={i}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={currentPage === p}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(p);
                }}
                className={`hover:bg-purple-500 hover:text-white transition-colors duration-200 ${
                  currentPage === p ? "bg-(--color-purple) text-white" : ""
                }`}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            className={`${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            } hover:bg-(--color-purple)`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MyPagination;
