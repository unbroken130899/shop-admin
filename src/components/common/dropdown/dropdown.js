import Select from "react-select";
import { Wrapper } from "./dropdown.e";
import "react-dropdown/style.css";

function CustomDropdown({ options, defaultOption, onChange, isDisabled }) {
  return (
    <Wrapper>
      <Select
        defaultValue={defaultOption}
        isSearchable={true}
        options={options}
        onChange={onChange}
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
      />
    </Wrapper>
  );
}

export default CustomDropdown;
