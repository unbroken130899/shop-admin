import { isDisabled } from "@testing-library/user-event/dist/utils";
import Select from "react-select";
import { Wraper } from "./multi-select.e";

function MultiSelect({ options, selected, setSelected, isDisabled }) {
  return (
    <Wraper>
      <Select
        isDisabled={isDisabled}
        options={options}
        value={selected}
        onChange={setSelected}
        isMulti
        classNamePrefix="select"
      />
    </Wraper>
  );
}

export default MultiSelect;
