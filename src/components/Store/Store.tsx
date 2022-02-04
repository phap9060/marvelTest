import * as S from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../API/ComicApi";
import { Card } from "../Card/Card";
import load from '../../assets/images/load.jpg';

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
const max_item = 7;
const max_left = (max_item - 1) / 2;


export function Store() {
  const [comics, setComics] = useState<Props[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [offSet,setOffSet] = useState<number>(0)
  const limit = 12



  useEffect(() => {
    axios.get(`${baseURL}limit=${limit}&offset=${offSet}&ts=1643409687&apikey=000e6742232f0112124539d055e9128e&hash=e95f838ffc7c4a22cd1bf490fb2594f2`)
    .then((res) => {
      setComics(res.data.data.results);
      setLoading(true);
    });
  }, [offSet]);

  const current = offSet ? offSet / limit + 1 : 1
  const first = Math.max(current - max_left, 1)
 
  return (
    <S.Container>
    <S.ul>
      {loading && Array.from({length:max_item}).map((value,index) => index + first)
      .map((page,index) =>(
            <S.li> 
              <S.button onClick={ () => setOffSet((page - 1) * limit)} key={page}>
              {page}
            </S.button> 
            </S.li>
      ))}
     </S.ul>
  
      <S.Section>
        {!loading && <S.span> <S.img src={load} /> </S.span> }
        {loading &&
          comics.map((comic) => (
            <Card
              key={comic.id}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              text={comic.title}
              price={comic.prices[0].price}
              api={comic}
              comic={comic}
            />
          ))}
      </S.Section>
    </S.Container>
  );
}
