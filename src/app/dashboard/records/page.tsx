import { CalenderSearch } from "@/components/calender-search/calender-search"
import Image from "next/image"

export default function Records() {
  return (
    <>
      <CalenderSearch />

      <section className="down_section bg-[#f5f5f5] py-8">
        <div className="container m-auto">
          <div className="record_part flex justify-between mt-4">
            <div className="record_seidebar bg-white w-[18%] p-4 rounded-lg">
              <h5 className="font-roboto text-2xl text-[#444] font-medium">
                Records
              </h5>
              <div className="add_btn mt-2">
                <button className="add_record rounded-full bg-[#00915f] w-full p-2.5 font-roboto text-white text-sm">
                  + Add
                </button>
              </div>
              <div className="search mt-4 relative">
                <span className="search_icon absolute top-2 left-[7px] text-[#777]">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  className="w-full border border-[#d9d9d9] outline-0 p-2 pl-[25px] rounded"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="filter mt-4 relative">
                <h6 className="font-roboto text-[#444] text-lg font-medium uppercase">
                  Filter
                </h6>
                <input
                  className="w-full border border-[#d9d9d9] outline-0 p-2 mt-2 rounded"
                  type="text"
                  placeholder="Filter"
                />
              </div>

              <div className="sidebarnav_options mt-4">
                <ul>
                  <li className="outer_menu font-roboto text-[#444] text-medium font-semibold uppercase py-2 cursor-pointer relative">
                    <span className="flex justify-between">
                      Accounts{" "}
                      <span>
                        <i className="fa-solid fa-caret-right"></i>
                      </span>
                    </span>
                    <ul className="inner_menu innershowmenu">
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        All Accounts
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Cash
                      </li>
                    </ul>
                  </li>
                  <li className="outer_menu font-roboto text-[#444] text-medium font-semibold uppercase py-2 cursor-pointer relative">
                    <span className="flex justify-between">
                      Categories{" "}
                      <span>
                        <i className="fa-solid fa-caret-right"></i>
                      </span>
                    </span>
                    <ul className="inner_menu">
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Food & Drink
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Shopping
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Housing
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Transportation
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Vechiles
                      </li>
                    </ul>
                  </li>
                  <li className="outer_menu font-roboto text-[#444] text-medium font-semibold uppercase py-2 cursor-pointer relative">
                    <span className="flex justify-between">
                      Currencies{" "}
                      <span>
                        <i className="fa-solid fa-caret-right"></i>
                      </span>
                    </span>
                    <ul className="inner_menu">
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        All Currencies
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        BDT
                      </li>
                    </ul>
                  </li>
                  <li className="outer_menu font-roboto text-[#444] text-medium font-semibold uppercase py-2 cursor-pointer relative">
                    <span className="flex justify-between">
                      Accounts{" "}
                      <span>
                        <i className="fa-solid fa-caret-right"></i>
                      </span>
                    </span>
                    <ul className="inner_menu">
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        All Accounts
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Cash
                      </li>
                    </ul>
                  </li>
                  <li className="outer_menu font-roboto text-[#444] text-medium font-semibold uppercase py-2 cursor-pointer relative">
                    <span className="flex justify-between">
                      Accounts{" "}
                      <span>
                        <i className="fa-solid fa-caret-right"></i>
                      </span>
                    </span>
                    <ul className="inner_menu">
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        All Accounts
                      </li>
                      <li className="font-roboto text-[#444] text-sm font-semibold uppercase p-2">
                        Cash
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="record_rightpart bg-white w-[80%] h-[500px] rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  )
}
