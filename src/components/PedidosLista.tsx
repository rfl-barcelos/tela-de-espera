
import { Pedido } from '../types/Pedido'

type Props = {
  titulo: string;
  pedidos: Pedido[];
};

function PedidosLista({ titulo, pedidos }: Props) {
  return (
    <div className="h-100 w-25 d-flex flex-column align-items-center border border-dark border-2 rounded p-3">
      <div className="text-center" style={{'height': '15%'}}>
        <p className="fs-3 fonte-tela-pedidos">{titulo}</p>
      </div>
      <div className='w-100'>
        <ul className="list-group text-center">
          {pedidos.map((pedido) => (
            <li key={pedido.id} className="fs-3 list-group-item border-2">
              {pedido.nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PedidosLista;