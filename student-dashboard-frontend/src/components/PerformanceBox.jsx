const PerformanceBox = ({ indicator, handlePercentage }) => {
  return (
    <div className="border-2 flex flex-col border-[#FFDD55] rounded-2xl p-3 w-[320px] md:w-[360px] lg:w-[340px]  ">
      <div className="  flex justify-center items-center bg-[#F7E0FF] h-[20px] w-[120px] rounded-sm mb-2">
        <p className="uppercase text-xs">
          {"</>"} {indicator.type}
        </p>
      </div>
      <p className=" sm:text-3xl font-bold mb-2 text-[#9B59F0]">
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
