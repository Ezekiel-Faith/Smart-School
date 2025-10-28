const PerformanceBox = ({ indicator, handlePercentage }) => {
  return (
    <div className="border-2 border-[#FFDD55] rounded-2xl p-3 w-[300px] ">
      <div className="w-[170px] h-8 flex justify-center items-center bg-[#F7E0FF] px-2 rounded-lg mb-2">
        <p className="uppercase text-xs">
          {"</>"} {indicator.type}
        </p>
      </div>
      <p className="text-lg sm:text-xl font-bold mb-2 text-[#9B59F0]">
        {indicator.grade}/20
      </p>
      <div className="w-full h-6 rounded-[20px] bg-[#d7d7d7] relative">
        <div
          className={`h-full ${
            indicator.type === "performance" ? "bg-[#FFDD55]" : "bg-[#009519]"
          } rounded-[20px]`}
          style={{ width: `${handlePercentage(indicator)}%` }}
        ></div>
        <p className="text-xs absolute right-3 top-1">
          {handlePercentage(indicator)}%
        </p>
      </div>
    </div>
  );
};

export default PerformanceBox;
