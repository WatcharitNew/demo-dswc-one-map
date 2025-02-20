import React, { useContext } from "react";
import { LEVEL } from "../../constants/index";
import { MapFilterContext } from "@/contexts/mapFilterContext";
import "./index.css";
import clsx from "clsx";

const Level = () => {
  const { setFilterValues, search, onChangeSearch } =
    useContext(MapFilterContext);

  const handleChangeSearch = (data) => {
    setFilterValues({});
    onChangeSearch(data);
  };

  return (
    <ul className="circle">
      {LEVEL.map((item) => {
        const isMatch = search?.level?.value === item.value;
        return (
          <li key={item.value}>
            <button
              className={clsx(`text ease-in duration-200`, {
                "text-selected": isMatch,
              })}
              onClick={() => handleChangeSearch({ level: item })}
            >
              {item.label}
            </button>
          </li>
        );
      })}
      {search?.level?.label ? (
        <p
          className="color-black z-10 text-[18px] font-[500] cursor-pointer"
          onClick={() => handleChangeSearch({ level: undefined })}
        >
          {search?.level?.label}
        </p>
      ) : (
        <p className="color-black z-10 text-xs text-center">
          เลือก <br />
          วงจรภัย
        </p>
      )}
      <div className="inner-circle" />
    </ul>
  );
};

export default Level;
