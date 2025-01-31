"use client";

import { clsx } from "clsx";
import {
  NavLink,
  Menu,
  MenuTarget,
  MenuDropdown,
  Image,
  createTheme,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Arrow } from "@/icons";
import MapFilterRadio from "./MapFilterRadio";
import MapFilterSwitch from "./MapFilterSwitch";

const MapFilterComponent = ({
  filterData,
  filterValues,
  handleRadioChange,
  handleSwitchChange,
}) => {
  const [opened, { toggle }] = useDisclosure(true);
  const theme = createTheme({
    cursorType: "pointer",
  });

  return (
    <MantineProvider theme={theme}>
      <Menu
        opened={opened}
        onChange={toggle}
        closeOnClickOutside={false}
        transitionProps={{ transition: "scale-y" }}
      >
        <MenuTarget>
          <NavLink
            label={
              <span className="text-gray-900 text-xl font-medium">
                ชั้นข้อมูล
              </span>
            }
            leftSection={
              <Image alt="layer" className="size-5 mx-2" src="/layer.svg" />
            }
            rightSection={
              <Arrow
                className={clsx("size-5 rotate-90 ease-in-out duration-300", {
                  "rotate-180": opened,
                })}
              />
            }
            className="w-64"
          />
        </MenuTarget>
        <MenuDropdown className="max-h-[34rem] overflow-y-auto">
          {filterData.map(({ type, label, data }) => {
            if (!data){
              return (
                type === "radio" ? (
                  <MapFilterRadio
                    key={label}
                    label={label}
                    checked={filterValues?.[label]?.[label] ?? false}
                    onChange={(checked) =>
                      handleRadioChange(label, label, checked)
                    }
                  />
                ) : (
                  <MapFilterSwitch
                    key={label}
                    label={label}
                    checked={filterValues?.[label]?.[label] ?? false}
                    onChange={(checked) =>
                      handleSwitchChange(label, label, checked)
                    }
                    labelClassName="text-gray-900 text-base"
                  />
                )
              )
            }

            return (
              <NavLink
                key={label}
                label={<span className="text-gray-900 text-base">{label}</span>}
                opened={true}
                childrenOffset={0}
                disableRightSectionRotation={true}
                rightSection={<div />}
                disabled
                classNames={{
                  root: "opacity-100",
                }}
              >
                {data.map((value, index) =>
                  type === "radio" ? (
                    <MapFilterRadio
                      key={value}
                      label={value}
                      checked={filterValues?.[label]?.[value] ?? false}
                      onChange={(checked) =>
                        handleRadioChange(label, value, checked)
                      }
                    />
                  ) : (
                    <MapFilterSwitch
                      key={value}
                      label={value}
                      checked={filterValues?.[label]?.[value] ?? false}
                      onChange={(checked) =>
                        handleSwitchChange(label, value, checked)
                      }
                    />
                  )
                )}
              </NavLink>
          )})}
        </MenuDropdown>
      </Menu>
    </MantineProvider>
  );
};

export default MapFilterComponent;
