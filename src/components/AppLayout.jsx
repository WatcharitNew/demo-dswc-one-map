"use client";

import { Image } from "@mantine/core";

export const AppLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full h-20 bg-white  flex items-center px-4 pr-8 relative z-50">
        <div className="flex-grow">
          <div className="flex flex-row items-center gap-2">
            <Image
              alt="termtem logo"
              className="size-14"
              src="/termtem-logo.svg"
            />
            <p className="font-medium text-gray-600 text-lg">
              ระบบข้อมูลแผนที่สำหรับการบริหารจัดการภัยพิบัติ
              เพื่อสนับสนุนการใช้ข้อมูลห้องศูนย์บัญชาการเหตุการณ์ (EOC)
            </p>
          </div>
        </div>

        <div className="flex-none">
          <div className="flex flex-row gap-4 items-center">
            <Image alt="bell" className="size-8" src="/bell.svg" />
            <Image alt="profile" className="size-14" src="/profile.svg" />
            <div className="flex flex-col text-black">
              <p>Admin</p>
              <p>ผู้ว่าราชการจังหวัด</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center relative -mt-3">
        <Image
          alt="navbar-curve"
          src="/navbar-curve.svg"
          w={1440}
          h={56}
          className="drop-shadow-[0_10px_10px_rgba(179,213,249,0.5)] z-10"
        />
        <p className="text-2xl text-blue-900 absolute left-1/2 top-4 -ml-[2.125rem] z-10">
          แผนที่จังหวัดเชียงราย
        </p>
        <div className="absolute right-0 top-6 h-16 w-2/5">
          <Image alt="dss-bg" className="w-full h-full" src="/dss-bg.svg" fit='contain' />
          <div className="h-10 w-[20.625rem] px-7 py-2 bg-white right-0 top-3 absolute border-l border-l-gray-200">
            <p className="text-right text-gray-900">
              เข้าสู่ระบบ การสนับสนุนการตัดสินใจ (DSS)
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-20 absolute bg-black top-0 shadow-[0_10px_10px_rgba(179,213,249,0.5)]"></div>
      {children}
    </div>
  );
};
