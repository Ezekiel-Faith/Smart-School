const PerformanceBox = ({ indicator, handlePercentage }) => {
  return (
    <div
      className="
        border-2
        border-[#FFDD55]
        rounded-2xl
        p-3
        w-full
        min-h-[180px]
        flex
        flex-col
        justify-between
      "
    >
      {/* TYPE LABEL */}
      <div className="flex justify-center items-center bg-[#F7E0FF] h-[20px] w-[120px] rounded-sm">
        <p className="uppercase text-xs">
          {"</>"} {indicator.type}
        </p>
      </div>

      {/* SCORE */}
      <p className="text-3xl font-bold text-[#9B59F0]">{indicator.grade}/20</p>

      {/* PROGRESS BAR */}
      <div className="w-full h-6 rounded-[20px] bg-[#d7d7d7] relative">
        <div
          className={`h-full ${
            indicator.type === "performance" ? "bg-[#FFDD55]" : "bg-[#009519]"
          } rounded-[20px]`}
          style={{ width: `${handlePercentage(indicator)}%` }}
        />
        <p className="text-xs absolute right-3 top-1">
          {handlePercentage(indicator)}%
        </p>
      </div>
    </div>
  );
};

export default PerformanceBox;
