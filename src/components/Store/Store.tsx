import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../API/ComicApi";

export function Store() {
  const [comics, setComics] = useState<string[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      console.log(res.data.data.results);
    });
  }, []);
  return <div></div>;
}
