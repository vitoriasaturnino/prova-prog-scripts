import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { Props } from "../types";
import IbgeServices from "../services/ibge";

export default function Principal(name: string) {
  const[dataIbge,setdataIbge] = useState({} as Props);
  
  useEffect(
    function(){
    (
      async function () {
        const dataIbge: Props = await IbgeServices.get(name);
        console.log(dataIbge);
        setdataIbge(dataIbge); 
      }
    )()},
    []
  );

  return (
    <>
      <Search name={dataIbge.name}/>
    </>
  );
}
