import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);

  const { name, element, backgroundImg, traits } = sign;

  return (
    <div className="details">
      <img src={backgroundImg} alt="" />
      <h2>{name}</h2>
      <h4>{element}</h4>
      <h4>{traits} </h4>
    </div>
  );
};

export default Detail;
