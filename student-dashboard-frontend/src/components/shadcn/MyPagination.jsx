import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MyPagination = ({ totalItems, itemsPerPage = 4, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // Smart pagination range logic
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // how many numbers to show around current

    if (totalPages <= maxVisible + 2) {
      // If pages are few, show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1); // always show first page

      if (currentPage > 3) pages.push("left-ellipsis");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("right-ellipsis");

      pages.push(totalPages); // always show last page
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Page numbers with ellipsis */}
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
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MyPagination;
