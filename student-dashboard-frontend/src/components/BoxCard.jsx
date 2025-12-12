const BoxCard = ({box}) => {
  return (
    <div className="h-36 sm:h-40 rounded-lg bg-[#eaeaea] flex justify-center items-center flex-col p-3 w-[150px] md:w-[230px] ">
      <p className="capitalize bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-sm sm:text-base">
        {box.title}
      </p>
      <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
        {box.value}
      </p>
      <p className="bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-xs sm:text-sm">
        {box.sub}
      </p>
      {box.icon}
    </div>
  );
};

export default BoxCard;
