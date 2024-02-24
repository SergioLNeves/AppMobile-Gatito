import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import Rotas from './src/Rotas';
import { TelaPadrao } from './src/componentes/TelaPadrao/TelaPadrao';

export default function App() {
  
  return <TelaPadrao childrean={<Rotas/>} /> ;
}
