import CustomDropdown from "../dropdown/dropdown";
import useDrivers from "../../../hooks/userDrivers";

function DriversSelect({ onChange }) {
  const { driversSelect } = useDrivers();
  return (
    <CustomDropdown
      options={driversSelect}
      onChange={(e) => {
        onChange(e.value);
      }}
    />
  );
}

export default DriversSelect;
