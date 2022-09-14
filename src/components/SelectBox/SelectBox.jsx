import React, { useRef, useState } from "react";
import classes from "./SelectBox.module.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const inputRef = useRef();

  const handleChange = (selectedOption) => {
    if (!selectedOption) {
      console.log(inputRef);
      selectedOption = {
        target: inputRef,
        value: "",
      };
    }
    setSelectedValue({ selectedOption });
  };

  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <Select
          id="search-select"
          ref={inputRef}
          options={options}
          isClearable
          key={selectedValue.value}
          defaultValue={selectedValue}
          onChange={handleChange}
        />
        <div className={classes.Stateboard}>
          <span className={classes.State}></span>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
