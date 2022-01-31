import * as S from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../API/ComicApi";
import { Card } from "../Card/Card";

interface Props {
  id: number;
  title: string;
  description: string;
  prices: [{ price: number }];
  thumbnail: {
    extension: string;
    path: string;
  };
}

export function Store() {
  const [comics, setComics] = useState<Props[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setComics(res.data.data.results);
      setLoading(true);
    });
  }, []);
  return (
    <S.Container>
      <S.Section>
        {loading &&
          comics.map((comic) => (
            <Card
              key={comic.id}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              text={comic.title}
              price={comic.prices[0].price}
            />
          ))}
      </S.Section>
    </S.Container>
  );
}
