"use client"

import Image from "next/image"
import { AddRecordPopup } from "../add-record/add-record-popup"
import { UserDropdown } from "./user-dropdown"
import Link from "next/link"
import { redirect } from "next/navigation"

export const NavBar = () => {
  const logout = () => {}
  return (
    <section className="navbar bg-white border-b border-b-gray-200">
      <div className="container-lg mx-auto">
        <div className="nav_item flex justify-between p-2">
          <div className="logo w-[10%]">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={60}
              height={60}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="menu w-[60%] flex items-center">
            <ul className="flex">
              <li className="mr-10">Dashboard</li>
              <li className="mr-10">
                <a
                  className="nav-item font-roboto text-lg text-[#777] font-normal active:text-[#222]"
                  href="#"
                >
                  Acounts
                </a>
              </li>
              <li className="mr-10">
                <Link href="/dashboard/records">Records</Link>
              </li>
              <li className="mr-10">
                <a
                  className="nav-item font-roboto text-lg text-[#777] font-normal active:text-[#222]"
                  href="#"
                >
                  Analytics
                </a>
              </li>
              <li className="mr-10">
                <a
                  className="nav-item font-roboto text-lg text-[#777] font-normal active:text-[#222]"
                  href="#"
                >
                  Imports
                </a>
              </li>
            </ul>
          </div>
          <div className="user_profile w-[30%] flex justify-between">
            <div className="record_btn self-center">
              <AddRecordPopup />
            </div>
            <div className="profile self-center flex justify-between">
              <div className="img w-[40px] h-[40px] rounded-full border-red-600 mr-[10px]">
                <Image
                  src={"/logo.png"}
                  alt="profile"
                  width={100}
                  height={100}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className="user_name relative">
                <div className="name flex cursor-pointer">
                  <UserDropdown />
                  <span className="mt-[4px] text-[#444]">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </div>

                <div className="drop absolute top-[42px] right-[10px] bg-white border border-b-gray-200 hidden">
                  <ul className="w-[150px]">
                    <li className="flex font-roboto text-[#444] px-4 py-2 cursor-pointer hover:bg-[#d9d9d9]">
                      <span className="mr-2.5 text-blue-600">
                        <i className="fa-solid fa-ticket"></i>
                      </span>
                      Add voucher
                    </li>
                    <li className="flex font-roboto text-[#444] px-4 py-2 cursor-pointer hover:bg-[#d9d9d9]">
                      <span className="mr-2.5 text-blue-600">
                        <i className="fa-solid fa-star"></i>
                      </span>{" "}
                      Upgrade
                    </li>
                    <li className="flex font-roboto text-[#444] px-4 py-2 cursor-pointer hover:bg-[#d9d9d9]">
                      <span className="mr-2.5 text-blue-600">
                        <i className="fa-solid fa-sliders"></i>
                      </span>{" "}
                      Settings
                    </li>
                    <li className="flex font-roboto text-[#444] px-4 py-2 cursor-pointer hover:bg-[#d9d9d9]">
                      <span className="mr-2.5 text-blue-600">
                        <i className="fa-solid fa-circle-info"></i>
                      </span>{" "}
                      Help
                    </li>
                    <li
                      onClick={logout}
                      className="flex font-roboto text-[#444] px-4 py-2 cursor-pointer hover:bg-[#d9d9d9]"
                    >
                      <i>
                        <span className="mr-2.5 text-blue-600">
                          <i className="fa-solid fa-right-from-bracket"></i>
                        </span>{" "}
                      </i>
                      Log out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
