import Dropdown from "react-dropdown";
import { Wrapper } from "./select.e";
import "react-dropdown/style.css";

function Select({ options, defaultOption, onChange }) {
  return (
    <Wrapper>
      <Dropdown
        options={options}
        onChange={onChange}
        value={defaultOption}
        placeholder="Select an option"
      />
    </Wrapper>
  );
}

export default Select;
