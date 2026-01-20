import { timetableData } from "@/lib/timestabledata";

const TimeTable = () => {
  const { days, periods, schedule } = timetableData;

  return (
    <div className="flex justify-end">
      <div className="overflow-x-auto bg-gradient-to-br from-white to-purple-300 ">
        <table className="w-full max-w-5xl border-collapse">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-3 text-left">Time</th>
              {days.map((day) => (
                <th key={day} className="p-3 text-left">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {periods.map((time, periodIndex) => (
              <tr key={time} className="">
                <td className="p-3 font-semibold text-purple-900 whitespace-nowrap text-left">
                  {time}
                </td>

                {days.map((day) => {
                  const subject = schedule[day][periodIndex];

                  return (
                    <td
                      key={day + periodIndex}
                      className={`p-3 text-left font-medium ${
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
