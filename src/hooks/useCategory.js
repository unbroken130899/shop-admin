import { useEffect, useState } from "react";
import axios from "axios";

export default function useCategories() {
  const [categories, setCategories] = useState();
  const [types, setTypes] = useState([{ label: "top", value: "top" }]);

  useEffect(() => {
    axios
      .post("https://beeto.in1.uz/api/category/moderator/get")
      .then((res) => {
        setCategories(res.data.data);
        res.data.data.map((category) => {
          setTypes((previous) => [
            ...previous,
            { label: category.name, value: category._id },
          ]);
        });
      });
  }, []);

  return { categories, types };
}
