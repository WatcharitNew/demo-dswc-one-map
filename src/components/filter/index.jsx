"use client";
import React, { useContext } from "react";
import { Button, Select } from "@mantine/core";
import { MainContext } from "@/contexts/mainContext";
import clsx from "clsx";
import {
  DISASTER_TYPE,
  DISTRICT_OPTIONS,
  SUBDISTRICT_OPTIONS,
} from "../../constants/index";
import Level from "./Level";

export const Filter = () => {
  const { selectedDisaster, setSelectedDisaster, search, onChangeSearch } =
    useContext(MainContext);

  return (
    <div className="col bg-blue-50 items-center ml-4 z-10">
      <div className="row justify-between items-center w-full h-[76px] bg-gradient-to-r from-white to-blue-50 p-4 pl-0 pr-[30px] rounded-l-[40px] ">
        <div className="row items-center gap-2 z-30">
          <Level />
          <div className="row gap-2">
            {DISASTER_TYPE.map((item) => {
              const isSelected = selectedDisaster.includes(item.value);
              return (
                <Button
                  key={item.value}
                  variant="outline"
                  className={clsx(
                    "text-black font-[400] border-1 border-[#e2e5ea]",
                    {
                      "text-blue-500 font-[500] border-blue-100 bg-blue-100":
                        isSelected,
                    }
                  )}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDisaster(
                        selectedDisaster.filter((j) => j !== item.value)
                      );
                    } else {
                      setSelectedDisaster(selectedDisaster.concat(item.value));
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
        <p className="text-xs pt-[10px] text-gray-400">
          ข้อมูล​ ณ วันที่ 29 ต.ค. 2024 - 4 พ.ย. 2024
        </p>
      </div>
      <div className="col gap-1 absolute left-[684px] top-[144px] z-30">
        <Select
          value={search?.district ?? null}
          withCheckIcon={false}
          placeholder="เลือกจังหวัด"
          data={DISTRICT_OPTIONS}
          clearable={true}
          onChange={(value) => {
            if (value) {
              onChangeSearch({ district: value });
            } else {
              onChangeSearch({
                district: undefined,
                subdistrict: undefined,
              });
            }
          }}
        />
        <Select
          value={search?.subdistrict ?? null}
          withCheckIcon={false}
          placeholder="เลือกตำบล"
          data={SUBDISTRICT_OPTIONS}
          disabled={search?.district === undefined}
          onChange={(value) => onChangeSearch({ subdistrict: value })}
        />
      </div>
    </div>
  );
};
