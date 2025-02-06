"use client";
import React, { useContext } from "react";
import { Button, Select } from "@mantine/core";
import { MapFilterContext } from "@/contexts/mapFilterContext";
import clsx from "clsx";
import {
  DISASTER_TYPE,
  PROVINCE_OPTIONS,
  AMPHOE_OPTIONS,
  DISASTER_TYPE_ENABLE,
} from "../../constants/index";
import Level from "./Level";

const Filter = () => {
  const {
    selectedDisaster,
    setSelectedDisaster,
    search,
    onChangeSearch,
    setFilterValues,
  } = useContext(MapFilterContext);

  return (
    <div className="row bg-blue-50 items-center ml-4 z-50 mt-3">
      <div className="row justify-between items-center w-full h-[76px] bg-gradient-to-r from-white to-blue-50 p-[2.75rem] pl-0 pr-[30px] rounded-l-[40px] ">
        <div className="row items-center gap-2 z-30">
          <Level />
          <div className="row gap-2">
            {DISASTER_TYPE.map((item) => {
              const isSelected = selectedDisaster === item.value;
              const isEnable = DISASTER_TYPE_ENABLE.includes(item.value);
              return (
                <Button
                  key={item.value}
                  variant="outline"
                  className={clsx(
                    "text-black font-[400] border-1 border-[#e2e5ea]",
                    {
                      "text-blue-500 font-[500] border-blue-100 bg-blue-100":
                        isSelected,
                      "cursor-default": !isEnable,
                    }
                  )}
                  onClick={() => {
                    if (isEnable) {
                      setFilterValues({});
                      setSelectedDisaster(isSelected ? undefined : item.value);
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
          <Select
            value={search?.province?.value ?? null}
            withCheckIcon={false}
            placeholder="เลือกจังหวัด"
            data={PROVINCE_OPTIONS}
            onChange={(_value, option) => {
              if (option) {
                onChangeSearch({ province: option });
                setFilterValues({});
              }
            }}
          />
          <Select
            value={search?.amphoe?.value ?? null}
            withCheckIcon={false}
            placeholder="เลือกอำเภอ"
            data={AMPHOE_OPTIONS}
            disabled={search?.province === undefined}
            clearable
            onChange={(_value, option) => {
              if (option) {
                onChangeSearch({ amphoe: option });
              } else {
                onChangeSearch({
                  ...search,
                  amphoe: undefined,
                });
              }
              setFilterValues({});
            }}
          />
        </div>
        <p className="text-xs pt-[10px] text-gray-400">
          ข้อมูล​ ณ วันที่ 29 ต.ค. 2024 - 4 พ.ย. 2024
        </p>
      </div>
    </div>
  );
};

export default Filter;
