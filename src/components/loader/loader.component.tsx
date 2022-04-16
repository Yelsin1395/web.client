import { BounceLoader } from 'react-spinners';
import './loader.style.css';

export const LoaderFullPage = () => {
  return (
    <div className="al-loader-fullPage">
      <BounceLoader color="#FFFFFF" size={100} />
      <p className="al-loader-text">Cargando datos</p>
    </div>
  );
};
