import { useEffect, useState } from "react";
import axios from "axios";

export default function useDrivers() {
  const [driversSelect, setDriversSelect] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://beeto.in1.uz/api/driver/get-pagin",
        { limit: 20, page: 1, search: "" },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).token
            }`,
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        res.data.data.data.map((driver) => {
          driver.status === "active" &&
            setDriversSelect((previous) => [
              ...previous,
              {
                label: `${driver?.first_name} ${driver?.last_name}`,
                value: driver._id,
              },
            ]);
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
  }, []);

  return { driversSelect };
}
