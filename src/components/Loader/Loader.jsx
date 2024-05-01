import { RotatingLines } from 'react-loader-spinner';
import { Loaders } from "./Loader.styled";

export default function Loader() {
  return (
    <Loaders>
      <RotatingLines
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        color="black"
        ariaLabel="rotating-lines-loading"
        strokeColor="#f4c550"
      />
    </Loaders>
  );
}