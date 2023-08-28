export const AddRecord = () => {
  return (
    <div className="record_modal w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center ">
      <div className="record_item bg-white border border-[#777] rounded-lg w-[80%] absolute overflow-hidden">
        <div className="top_part p-4 border border-b-[#d9d9d9] rounded-t-lg">
          <h3 className="font-roboto text-2xl text-[#444] font-medium uppercase">
            Add Record
          </h3>
        </div>
        <div className="bottom_part flex">
          <div className="left_part w-[60%]">
            <div className="inner_top bg-[#614BC3] text-center p-4 pb-6">
              <div className="buttons mt-2 border border-[#d9d9d9] rounded inline-block overflow-hidden">
                <button className="p-2 bg-white font-roboto text-medium text-[#FE0000]">
                  Expense
                </button>
                <button className="p-2 bg-white font-roboto text-medium text-[#38E54D]">
                  Income
                </button>
                <button className="p-2 bg-white font-roboto text-medium text-[#2192FF]">
                  Transfer
                </button>
              </div>
              <div className="expense_item">
                <div className="account">
                  <select className="w-[200px] h-[30px] outline-0 mt-4 font-roboto text-[#444] text-base font-medium">
                    <option>Cash</option>
                    <option>Cash</option>
                    <option>+Add Account</option>
                  </select>
                </div>
                <div className="ex_amount w-[140px] inline-block m-auto mt-2">
                  <input
                    className="w-full p-2 outline-0"
                    type="number"
                    placeholder="Add Amount"
                  />
                </div>
                <div className="currency w-[60px] inline-block">
                  <select className="w-full h-[40px] outline-0 mt-2 font-roboto text-[#444] text-base font-medium">
                    <option>BDT</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="inner_bottom bg-[#f5f5f5] p-4 pb-8">
              <div className="bottom_top flex">
                <div className="category w-6/12 ml-7">
                  <h6 className="font-roboto text-[#444] text-lg font-medium">
                    Category
                  </h6>
                  <select className="w-10/12 h-[38px] outline-0 mt-2 font-roboto text-[#444] text-lg font-medium">
                    <option>Category</option>
                    <option>Food & Drinks</option>
                    <option>Shopping</option>
                    <option>Housing</option>
                    <option>Vehicle</option>
                    <option>Life & Entertainment</option>
                  </select>
                </div>
                <div className="label w-6/12 ml-7">
                  <h6 className="font-roboto text-[#444] text-lg font-medium">
                    Label
                  </h6>
                  <input
                    className="w-10/12 outline-0 mt-2 p-2"
                    type="text"
                    placeholder="Add Label"
                  />
                </div>
              </div>

              <div className="bottom_bottom flex mt-4">
                <div className="date w-6/12 ml-7">
                  <h6 className="font-roboto text-[#444] text-lg font-medium">
                    Date
                  </h6>
                  <input className="w-10/12 outline-0 mt-2 p-2" type="date" />
                </div>
                <div className="time w-6/12 ml-7">
                  <h6 className="font-roboto text-[#444] text-lg font-medium">
                    Time
                  </h6>
                  <input className="w-10/12 outline-0 mt-2 p-2" type="time" />
                </div>
              </div>
              <div className="add_btn flex justify-center mt-7">
                <button className="w-[300px] bg-[#00DFA2] rounded-full p-2.5 font-roboto text-white text-lg font-medium">
                  Add Record
                </button>
              </div>
            </div>
          </div>

          <div className="right_part w-[40%] bg-white p-4">
            <div className="note">
              <h6 className="font-roboto text-[#444] text-lg font-medium">
                Note
              </h6>
              <textarea className="border border-[#444] w-full h-[150px] outline-0 resize-none"></textarea>
            </div>
            <div className="payment mt-2">
              <h6 className="font-roboto text-[#444] text-lg font-medium">
                Paymnet type
              </h6>
              <select className="w-full h-[40px] outline-0 mt-2 font-roboto text-[#444] text-base font-medium border border-[#777]">
                <option>Cash</option>
                <option>Debitcard</option>
                <option>Creditcard</option>
                <option>Transfer</option>
                <option>Voucher</option>
                <option>Mobile Payment</option>
              </select>
            </div>
            <div className="payment_status mt-2">
              <h6 className="font-roboto text-[#444] text-lg font-medium">
                Paymnet status
              </h6>
              <select className="w-full h-[40px] outline-0 mt-2 font-roboto text-[#444] text-base font-medium border border-[#777]">
                <option>Cleared</option>
                <option>Uncleared</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
