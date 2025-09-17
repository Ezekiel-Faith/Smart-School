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
    <section className="lg:max-w-[1072px] lg:max-h-[760px] mx-auto">
      {/* Filter Bar (separate file) */}
      <FilterBar
        filter={filter}
        setFilter={(tab) => {
          setFilter(tab);
          setCurrentPage(1); // reset page when switching filters
        }}
      />

      {/* Assignment List */}
      <div className="flex flex-col gap-[32px]">
        {currentAssignments.map((a) => (
          <div
            key={a.id}
            className="p-4 border rounded-xl shadow-sm flex justify-between items-center"
          >
            {/* Left: Assignment title + status */}
            <div className="flex -gap-4 items-center">
              <img src={Pdf} alt="pdf icon" typeof="svg" />
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-[15.059px]">{a.title}</h3>
                <aside className="flex gap-2 items-center">
                  <MdOutlineTimer />
                  {a.status === "pending" ? (
                    <Badge className="bg-(--color-project-red) text-white">
                      Pending
                    </Badge>
                  ) : (
                    <Badge className="bg-(--color-project-green) text-(--color-darkgray)">
                      Completed
                    </Badge>
                  )}
                </aside>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex gap-3">
              <button className="px-[24.2px] py-[11.116px] rounded-[7.53px] bg-gray-100 text-(--color-darkgray) text-[15.059px] hover:bg-gray-200">
                Download
              </button>

              {a.status === "pending" ? (
                <button className="px-[22.6px] py-[11.3px] rounded-[7.529px] bg-(--color-purple) cursor-pointer text-white text-[15.059px] hover:opacity-90">
                  Upload
                </button>
              ) : (
                <button className="px-4 py-2 rounded-lg text-[15.059px] bg-green-100 text-green-700 cursor-not-allowed">
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
