import { Ukol1 } from '../../components/Ukol1';
import { Ukol2 } from '../../components/Ukol2';
import { Ukol3 } from '../../components/Ukol3';
import { Ukol4 } from '../../components/Ukol4';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Ukol1 />
      <Ukol2 />
      <Ukol3 />
      <Ukol4 />
    </div>
  );
};

