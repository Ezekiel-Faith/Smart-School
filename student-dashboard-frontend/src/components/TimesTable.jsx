import { timetableData } from "@/lib/timestabledata";

const TimeTable = () => {
  const { days, periods, schedule } = timetableData;

  return (
    <div className="flex justify-end">
      <div className="overflow-x-auto bg-gradient-to-br from-white to-purple-300">
        <table className="w-full max-w-5xl border-collapse">
          <thead className="bg-purple-700 text-white">
            <tr>
              {/* TIME HEADER – STICKY ON MOBILE */}
              <th className="px-2 py-2 md:p-3 text-left sticky left-0 bg-purple-700 z-20 whitespace-nowrap">
                Time
              </th>

              {days.map((day) => (
                <th
                  key={day}
                  className="px-2 py-2 md:p-3 text-left whitespace-nowrap"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {periods.map((time, periodIndex) => (
              <tr key={time}>
                {/* TIME CELL – STICKY ON MOBILE */}
                <td className="px-2 py-2 md:p-3 font-semibold text-purple-900 text-sm md:text-base whitespace-nowrap text-left sticky left-0 bg-white z-10">
                  {time}
                </td>

                {days.map((day) => {
                  const subject = schedule[day][periodIndex];

                  return (
                    <td
                      key={day + periodIndex}
                      className={`px-2 py-2 md:p-3 text-sm md:text-base text-left font-medium whitespace-nowrap ${
                        subject === "Break"
                          ? "text-purple-800 bg-purple-100/70"
                          : "text-gray-800"
                      }`}
                    >
                      {subject}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
