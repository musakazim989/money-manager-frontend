export const CashData = () => {
  return (
    <section className="add bg-white px-2 py-4">
      <div className="container-lg mx-auto">
        <div className="add_item flex">
          <div className="cash flex bg-[#6a1b9a] p-4 rounded cursor-pointer">
            <span className="text-white text-2xl mt-[12px]">
              <i className="fa-solid fa-coins"></i>
            </span>
            <div className="amount ml-4">
              <h6 className="flex justify-between font-roboto text-lg text-[#d9d9d9] p-0">
                <span>Cash</span>{" "}
                <span className="text-right">
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h6>
              <h4 className="font-roboto text-xl text-white font-medium p-0">
                BDT 1000000000
              </h4>
            </div>
          </div>
          <div className="add_input ml-[20px] border border-dashed rounded border-[#777] p-4 flex justify-center items-center cursor-pointer">
            <p className="font-roboto text-sm text-[#777] font-sm">
              + Add Account
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
