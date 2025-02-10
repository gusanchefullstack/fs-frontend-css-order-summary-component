
const OrderSummary = () => {
  return (
    <div className="text-center text-base font-display bg-white w-[450px] h-[697px] rounded-[11px] max-sm:rounded-[20px] max-sm:w-[327px] max-sm:h-[567px]">
      <img src="illustration-hero.svg" alt="Hero image" className="rounded-t-[11px] drop-shadow-hero"/>
      <h1 className="text-dark-blue text-[28px] font-black my-7 max-sm:my-6 max-sm:text-[22px]">
        Order Summary
      </h1>
      <p className="text-desaturated-blue font-medium max-sm:text-[15px] max-sm:my-6 ">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="flex justify-between items-center mt-7 bg-very-pale-blue mx-12 max-sm:mx-6 rounded-[11px] py-[25px] px-6 max-sm:py-4" >
        <div className="flex items-center justify-center gap-4">
          <img src="icon-music.svg" alt="" />
          <div>
            <p className="text-dark-blue text-base max-sm:text-[14px] font-black">Annual Plan</p>{" "}
            <p className="font-bold max-sm:text-[14px] text-desaturated-blue">$59.99/year</p>
          </div>
        </div>
        <p className="underline font-extrabold text-sm max-sm:text-[13px] text-bright-blue hover:cursor-pointer hover:text-[#796FF7] hover:no-underline">Change</p>
      </div>
      <button className="bg-bright-blue text-white font-black rounded-[11px] my-7 max-sm:my-6  w-[354px] max-sm:w-[279px] h-[50px] drop-shadow-card hover:cursor-pointer hover:bg-[#796FF7]">
        Proceed to Payment
      </button>
      <p className="text-desaturated-blue font-black text-base max-sm:text-[15px] hover:cursor-pointer hover:text-dark-blue pb-7 max-sm:pb-6 ">Cancel Order</p>
    </div>
  );
};

export default OrderSummary;
