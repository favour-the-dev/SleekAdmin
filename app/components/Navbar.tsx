"use client";
import { SiSlickpic } from "react-icons/si";
import { MdExitToApp } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import profile from "../../public/profiledm.jpg";
import { ImMenu } from "react-icons/im";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
function Navbar() {
  const [navClicked, setNavClicked] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();

  function logOut() {
    router.push("/login");
  }

  useEffect(() => {
    console.log(pathName);
  }, []);
  return (
    <>
      <nav className="bg-[#fafafa] w-full p-5 border-b border-gray-200">
        <div className="w-full flex items-center justify-between">
          {/* logo and pageName */}
          <div className="flex items-center gap-[80px]">
            <span className="hidden font-bold text-3xl md:flex items-center gap-1 font-[family-name:var(--font-algy)]">
              <SiSlickpic /> <span>Sleek</span>
            </span>

            <span className="font-semibold text-xl flex items-center gap-1">
              <MdExitToApp /> <span>Dashboard</span>
            </span>
          </div>

          {/* hamburger menu */}
          <div className="md:hidden">
            <div className="flex items-center gap-5">
              <Link className="relative group" href={"/notifications"}>
                <div className="absolute group-hover:scale-110 duration-300 ease-in-out bg-red-500 text-gray-100 w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs p-[8px]">
                  1
                </div>
                <IoIosNotificationsOutline className="text-3xl" />
              </Link>
              <div
                onClick={() =>
                  setNavClicked((prevState: boolean) => !prevState)
                }
                className="text-2xl duration-300 ease-in-out"
              >
                {navClicked ? <IoCloseSharp /> : <ImMenu />}
              </div>
            </div>

            {/* mobile nav */}
            <div
              onClick={() => setNavClicked(false)}
              className={`${
                navClicked
                  ? "max-w-[70dvw] opacity-100 left-0"
                  : "max-w-[0] opacity-0 left-[-100%]"
              } duration-200 ease-in-out bg-[#fafafa] absolute top-0 h-screen rounded-r-2xl border border-gray-300 flex flex-col gap-8`}
            >
              {/* logo */}
              <div className="">
                <span className="p-3 font-bold text-3xl flex items-center gap-1 font-[family-name:var(--font-algy)]">
                  <SiSlickpic /> <span>Sleek</span>
                </span>
              </div>
              {/* nav links */}
              <div className="flex flex-col gap-1">
                <Link
                  href={"/dashboard"}
                  className={`${
                    pathName === "/dashboard"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <MdDashboard className="" /> Dashboard
                  </span>
                </Link>

                <Link
                  href={"/user-management"}
                  className={`${
                    pathName === "/user-management"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <FaRegUser className="" /> User Management
                  </span>
                </Link>

                <Link
                  href={"/artisan-management"}
                  className={`${
                    pathName === "/artisan-management"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <GrUserWorker className="" /> Artisan Management
                  </span>
                </Link>

                <Link
                  href={"/jobs"}
                  className={`${
                    pathName === "/jobs"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <MdOutlineWorkOutline className="" /> Jobs
                  </span>
                </Link>

                <Link
                  href={"/transactions"}
                  className={`${
                    pathName === "/transactions"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <GrTransaction className="" /> Transactions
                  </span>
                </Link>

                <Link
                  href={"/messaging"}
                  className={`${
                    pathName === "/messaging"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <FaRegMessage className="" /> Messaging & Support
                  </span>
                </Link>

                <Link
                  href={"/reviews"}
                  className={`${
                    pathName === "/reviews"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <MdOutlineRateReview className="" /> User Reviews
                  </span>
                </Link>

                <Link
                  href={"/notifications"}
                  className={`${
                    pathName === "/notifications"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <IoIosNotificationsOutline className="text-lg" />
                    Notifications{" "}
                    <span className="group-hover:scale-110 duration-300 ease-in-out bg-red-500 text-gray-100 w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs p-[8px]">
                      1
                    </span>
                  </span>
                </Link>

                <Link
                  href={"/settings"}
                  className={`${
                    pathName === "/settings"
                      ? "font-semibold bg-gray-200 text-[#2a2a2a] border-l-4 border-[#2a2a2a]"
                      : "text-gray-600"
                  } py-2 hover:font-semibold hover:bg-gray-200 hover:text-[#2a2a2a] hover:border-l-4 hover:border-[#2a2a2a]`}
                >
                  <span className="flex items-center gap-2 px-3">
                    <IoMdSettings className="" /> Settings
                  </span>
                </Link>
              </div>

              {/* logout */}
              <div className="p-3 mt-auto flex flex-col gap-5">
                <button className="header-btn text-xs capitalize hover:scale-105 duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-xl flex items-center gap-1">
                  Activate your business
                  <IoIosArrowDroprightCircle className="" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="relative w-fit">
                    <div className="absolute bottom-0 right-0 border-2 border-white w-[15px] h-[15px] rounded-full bg-green-400 text-transparent" />
                    <Image
                      src={profile}
                      alt="profile_image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex flex-col text-sm">
                    <span className="font-semibold">User Name</span>
                    <span className="text-gray-400 text-xs">
                      Logged in as an{" "}
                      <span className="text-green-400 font-semibold">
                        Admin
                      </span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => logOut()}
                  className="text-gray-600 text-lg font-semibold flex items-center py-3"
                >
                  <CiLogout /> Log Out
                </button>
              </div>
            </div>
          </div>

          {/* cta */}
          <div className="hidden md:flex items-center gap-4">
            <button className="header-btn text-xs capitalize hover:scale-105 duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-xl flex items-center gap-1">
              Activate your business
              <IoIosArrowDroprightCircle className="" />
            </button>

            <Link className="relative group" href={"/notifications"}>
              <div className="absolute group-hover:scale-110 duration-300 ease-in-out bg-red-500 text-gray-100 w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs p-[8px]">
                1
              </div>
              <IoIosNotificationsOutline className="text-3xl" />
            </Link>

            {/* profile */}
            <div className="flex items-center gap-3">
              <div className="relative w-fit">
                <div className="absolute bottom-0 right-0 border-2 border-white w-[15px] h-[15px] rounded-full bg-green-400 text-transparent" />
                <Image
                  src={profile}
                  alt="profile_image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              <div className="flex flex-col text-sm">
                <span className="font-semibold">User Name</span>
                <span className="text-gray-400 text-xs">
                  Logged in as an{" "}
                  <span className="text-green-400 font-semibold">Admin</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
