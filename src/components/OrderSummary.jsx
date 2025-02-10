const OrderSummary = () => {
  return (
    <div className="text-center text-base font-display bg-white w-[450px] h-[697px] rounded-[11px] ">
      <img src="illustration-hero.svg" alt="Hero image" className="rounded-t-[11px]"/>
      <h1 className="text-dark-blue text-[28px] font-black my-7">
        Order Summary
      </h1>
      <p className="px-12 text-desaturated-blue font-medium">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="flex justify-between items-center mt-7 bg-very-pale-blue mx-12 rounded-[11px] py-[25px] px-6" >
        <div className="flex items-center justify-center gap-4">
          <img src="icon-music.svg" alt="" />
          <div>
            <p className="text-dark-blue text-base font-black">Annual Plan</p>{" "}
            <p className="font-bold text-desaturated-blue">$59.99/year</p>
          </div>
        </div>
        <p className="underline font-extrabold text-sm text-bright-blue hover:cursor-pointer hover:text-[#796FF7] hover:no-underline">Change</p>
      </div>
      <button className="bg-bright-blue text-white font-black rounded-[11px] my-7 w-[354px] h-[50px] drop-shadow-card hover:cursor-pointer hover:bg-[#796FF7]">
        Proceed to Payment
      </button>
      <p className="text-desaturated-blue font-black text-base hover:cursor-pointer hover:text-dark-blue pb-7">Cancel Order</p>
    </div>
  );
};

export default OrderSummary;
