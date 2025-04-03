"use client";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function SideBar() {
  const pathName = usePathname();
  const router = useRouter();

  function logOut() {
    router.push("/login");
  }
  return (
    <>
      <div
        className={`p-3 bg-primary hidden min-w-fit md:w-full max-w-[20dvw] min-h-screen border border-gray-200 md:flex flex-col gap-8 duration-200 ease-in-out`}
      >
        {/* nav links */}
        <div className="flex flex-col gap-1">
          <Link
            href={"/dashboard"}
            className={`${
              pathName === "/dashboard"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <MdDashboard className="" /> Dashboard
            </span>
          </Link>

          <Link
            href={"/user-management"}
            className={`${
              pathName === "/user-management"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <FaRegUser className="" /> User Management
            </span>
          </Link>

          <Link
            href={"/artisan-management"}
            className={`${
              pathName === "/artisan-management"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <GrUserWorker className="" /> Artisan Management
            </span>
          </Link>

          <Link
            href={"/jobs"}
            className={`${
              pathName === "/jobs"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <MdOutlineWorkOutline className="" /> Jobs
            </span>
          </Link>

          <Link
            href={"/transactions"}
            className={`${
              pathName === "/transactions"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <GrTransaction className="" /> Transactions
            </span>
          </Link>

          <Link
            href={"/messaging"}
            className={`${
              pathName === "/messaging"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <FaRegMessage className="" /> Messaging & Support
            </span>
          </Link>

          <Link
            href={"/reviews"}
            className={`${
              pathName === "/reviews"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <MdOutlineRateReview className="" /> User Reviews
            </span>
          </Link>

          <Link
            href={"/notifications"}
            className={`${
              pathName === "/notifications"
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
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
                ? "font-semibold bg-gray-200 text-secondary border-l-4 border-secondary"
                : "text-gray-600"
            } py-2 hover:font-semibold hover:bg-gray-200 hover:text-secondary hover:border-l-4 hover:border-secondary`}
          >
            <span className="flex items-center gap-2 px-3">
              <IoMdSettings className="" /> Settings
            </span>
          </Link>
        </div>

        {/* logout */}
        <div className="p-3 mt-auto flex flex-col gap-5">
          <button
            onClick={() => logOut()}
            className="text-gray-600 text-lg font-semibold flex items-center"
          >
            <CiLogout /> Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
