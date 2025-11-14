// components/myComponents/AssignmentPage.jsx
import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import MyPagination from "../shadcn/MyPagination";
import { Badge } from "../ui/badge";
import { MdOutlineTimer } from "react-icons/md";
import Pdf from "../../assets/Frame.svg";
import UploadModal from "./UploadModal";
import "@/components/util/css/breakpoint.css";

const ITEMS_PER_PAGE = 4;
const STORAGE_KEY = "assignment_page_by_filter_v1";

const AssignmentPage = ({ assignments = [], onAssignmentCompleted }) => {
  const [filter, setFilter] = useState("all");
  // pageByFilter stores page numbers for each filter key: { all:1, pending:1, completed:1 }
  const [pageByFilter, setPageByFilter] = useState({
    all: 1,
    pending: 1,
    completed: 1,
  });
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // load persisted page map on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setPageByFilter((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  // persist whenever pageByFilter changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pageByFilter));
    } catch (e) {}
  }, [pageByFilter]);

  const currentPage = pageByFilter[filter] || 1;

  const filtered = assignments.filter((a) =>
    filter === "all" ? true : a.status === filter
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  // ensure current page is not beyond totalPages
  useEffect(() => {
    if (currentPage > totalPages) {
      // clamp it
      setPageByFilter((prev) => ({ ...prev, [filter]: totalPages }));
    }
  }, [totalPages, filter]); // eslint-disable-line

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssignments = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // when pagination changes, update map for current filter
  const handlePageChangeForFilter = (page) => {
    setPageByFilter((prev) => ({ ...prev, [filter]: page }));
  };

  return (
    <section className="md:max-w-[1072px] mx-auto">
      <FilterBar
        filter={filter}
        setFilter={(tab) => {
          // do NOT reset to 1 — just switch to the stored page for that tab
          setFilter(tab);
        }}
      />

      <div className="flex flex-col md:gap-[32px] gap-6 holderCss pb-24">
        {currentAssignments.map((a) => (
          <div
            key={a.id}
            className="lg:p-5 md:p-4 p-2 border rounded-xl shadow-sm flex justify-between items-center max-h-[85px] md:min-h-[100px] lg:min-h-[120px]"
          >
            <div className="flex lg:gap-4 items-center ">
              <img
                src={Pdf}
                alt="pdf icon"
                className="w-10 h-10 md:h-auto md:w-auto"
              />
              <div className="flex flex-col gap-2 ">
                <h3 className="font-medium lg:text-[15.059px] md:text-[16px] text-[11px]">
                  {a.title}
                </h3>
                <aside className="flex lg:gap-3 md:gap-4 gap-1 items-center ">
                  <MdOutlineTimer />
                  {a.status === "pending" ? (
                    <Badge className="bg-(--color-project-red) text-white md:text-[15px] w-[86px] badgeCss">
                      Pending
                    </Badge>
                  ) : (
                    <Badge className="bg-(--color-project-green) text-(--color-darkgray) md:text-[14px] w-[86px] badgeCss">
                      Completed
                    </Badge>
                  )}
                </aside>
              </div>
            </div>

            <div className="flex lg:gap-3 gap-2 btnHolderCss">
              <button className="lg:px-[24.2px] lg:py-[11.116px] cursor-pointer rounded-[7.53px] lg:w-[120px] md:w-[120px] w-[80px] bg-gray-100 text-(--color-darkgray) text-[11px] px-3 py-2 lg:text-[15.059px] md:text-[16px] hover:bg-gray-200">
                Download
              </button>

              {a.status === "pending" ? (
                <button
                  className="lg:px-[22.6px] lg:py-[11.3px] rounded-[7.529px] lg:w-[120px] md:w-[120px] w-[80px] bg-(--color-purple) cursor-pointer text-white text-[11px] px-3 py-2 lg:text-[15.059px] md:text-[16px] hover:opacity-90 buttonCss "
                  onClick={() => setSelectedAssignment(a)}
                >
                  Upload
                </button>
              ) : (
                <button className="lg:px-4 lg:py-2 rounded-md text-[11px] lg:w-[120px] md:w-[120px] w-[80px] px-3 py-2 lg:text-[15.059px] md:text-[16px] bg-green-100 text-green-700 cursor-not-allowed">
                  Submitted
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur border rounded-xl shadow-lg px-4 py-3">
        <MyPagination
          totalItems={filtered.length}
          itemsPerPage={ITEMS_PER_PAGE}
          // pass the current page for the active filter so it remains in-sync
          currentPage={currentPage}
          onPageChange={handlePageChangeForFilter}
        />
      </div>

      {selectedAssignment && (
        <UploadModal
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
          onUploadComplete={(assignmentId) => {
            if (typeof onAssignmentCompleted === "function") {
              onAssignmentCompleted(assignmentId);
            }
            setSelectedAssignment(null);
          }}
        />
      )}
    </section>
  );
};

export default AssignmentPage;
