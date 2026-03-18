const BoxCard = ({ box }) => {
  return (
    <div className='border-3 border-red-500 h-36 sm:h-40 rounded-lg bg-[#eaeaea] flex justify-center items-center flex-col p-3 md:w-[200px]'>
      <p className='capitalize bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-sm sm:text-base'>
        {box.title}
      </p>
      <p className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent'>
        {box.value}
      </p>
      <p className='bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-xs sm:text-sm'>
        {box.sub}
      </p>
      {box.icon}
    </div>
  );
};

export default BoxCard;
