import { HTMLAttributes } from "react";
import { SearchStyle } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  name: string
}

export function Search({name}:Props) {
  return (
    <SearchStyle>
      {name}
    </SearchStyle>
  )
}