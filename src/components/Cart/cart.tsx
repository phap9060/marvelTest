import * as S from "./style";
import { useSelector } from "react-redux";
import { useState } from "react";
export function Cart() {
  const [count, setCount] = useState<number>(1);
  const select = useSelector((state) => state.cart.items);
  console.log(select);
  function plus(props:number) {
    return props + 1
  }
  function minus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <S.Span>
      <S.div>
        {select.map((comic) => (
          <S.Section>
            <S.Img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
            <S.Qt>
              <S.button onClick={() => plus(comic.digitalId)}>+</S.button>
              {quantidade}
              <S.button onClick={() => minus()}>-</S.button>
            </S.Qt>
            <S.Price>R$ {Math.ceil(count * comic.prices[0].price)}</S.Price>
          </S.Section>
        ))}
      </S.div>
    </S.Span>
  );
}
