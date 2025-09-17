import React, { useState } from "react";
import FilterBar from "./FilterBar";
import MyPagination from "../shadcn/MyPagination";
import { Badge } from "../ui/badge";
import { MdOutlineTimer } from "react-icons/md";
import Pdf from "../../assets/Frame.svg";

const ITEMS_PER_PAGE = 4;

const AssignmentPage = ({ assignments }) => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter assignments
  const filtered = assignments.filter((a) =>
    filter === "all" ? true : a.status === filter
  );

  // Slice per page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssignments = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="md:max-w-[1072px] md:max-h-[760px] mx-auto">
      {/* Filter Bar (separate file) */}
      <FilterBar
        filter={filter}
        setFilter={(tab) => {
          setFilter(tab);
          setCurrentPage(1); // reset page when switching filters
        }}
      />

      {/* Assignment List */}
      <div className="flex flex-col md:gap-[32px] gap-6">
        {currentAssignments.map((a) => (
          <div
            key={a.id}
            className="lg:p-5 md:p-4 p-2 border rounded-xl shadow-sm flex justify-between items-center "
          >
            {/* Left: Assignment title + status */}
            <div className="flex lg:gap-4 items-center ">
              <img
                src={Pdf}
                alt="pdf icon"
                typeof="svg"
                className="w-10 h-10 md:h-auto md:w-auto"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-medium lg:text-[15.059px] md:text-[16px] text-[11px]">
                  {a.title}
                </h3>
                <aside className="flex lg:gap-3 md:gap-4 gap-1 items-center">
                  <MdOutlineTimer />
                  {a.status === "pending" ? (
                    <Badge className="bg-(--color-project-red) text-white md:text-[15px]">
                      Pending
                    </Badge>
                  ) : (
                    <Badge className="bg-(--color-project-green) text-(--color-darkgray) md:text-[15px]">
                      Completed
                    </Badge>
                  )}
                </aside>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex lg:gap-3 gap-2 ">
              <button className="lg:px-[24.2px] lg:py-[11.116px] rounded-[7.53px] bg-gray-100 text-(--color-darkgray) text-[11px] px-3 py-2 lg:text-[15.059px] md:text-[16px] hover:bg-gray-200">
                Download
              </button>

              {a.status === "pending" ? (
                <button className="lg:px-[22.6px] lg:py-[11.3px] rounded-[7.529px] bg-(--color-purple) cursor-pointer text-white text-[11px] px-3 py-2 lg:text-[15.059px] md:text-[16px] hover:opacity-90">
                  Upload
                </button>
              ) : (
                <button className="lg:px-4 lg:py-2 rounded-md text-[11px] px-3 py-2 lg:text-[15.059px] md:text-[16px] bg-green-100 text-green-700 cursor-not-allowed">
                  Submitted
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <MyPagination
          totalItems={filtered.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default AssignmentPage;
