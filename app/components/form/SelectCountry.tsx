"use client";

import useCountries from "@/app/hooks/useCountries";
import React from "react";
import Select from "react-select";

export type SelectCountryValue = {
  value: string;
  label: string;
};

type SelectCountryProps = {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
};

const SelectCountry = ({ value, onChange }: SelectCountryProps) => {
  const { getAll } = useCountries();
  return (
    <Select
      isClearable
      placeholder="Select Location"
      options={getAll()}
      value={value}
      onChange={(value) => onChange(value as SelectCountryValue)}
    />
  );
};

export default SelectCountry;
