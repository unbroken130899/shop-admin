import { useEffect, useState } from "react";
import axios from "axios";

export default function useTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState([]);
  const [tagDropdown, setTagDropdown] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .post("https://beeto.in1.uz/api/tag/moderator/get")
      .then((res) => {
        setTags(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return;
  }, []);

  useEffect(() => {
    tags.map((tag) => {
      setTagDropdown((previous) => [
        ...previous,
        { label: tag.name, value: tag._id },
      ]);
    });
  }, [loading]);

  return { tags, tagDropdown };
}
