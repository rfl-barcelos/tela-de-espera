
import PedidoFinalizado from './components/PedidoFinalizado';
import PedidosLista from './components/PedidosLista';

import { Pedido } from './types/Pedido'



function App() {

  const pedidosFila: Pedido[] = [
    { id: 1, nome: 'Lucas' },
    { id: 2, nome: 'Mariana' },
    { id: 3, nome: 'Beatriz' },
    { id: 3, nome: 'Gustavo' },
    { id: 3, nome: 'Camila' },
    { id: 3, nome: 'Felipe' },
    { id: 3, nome: 'Ana Clara' },
    { id: 3, nome: 'Bruno' },
  ];

    const pedidosFinalizados: Pedido[] = [
    { id: 1, nome: 'Juliana' },
    { id: 2, nome: 'Daniel' },
    { id: 3, nome: 'João' },
  ];

  return (
    <div className='container-fluid d-flex justify-content-center gap-2 p-3' style={{ 'height': '100vh' }}>
      <PedidosLista titulo='Pedidos Na Fila' pedidos={pedidosFila} />
      <PedidoFinalizado pedidoFinalizado='RAFAEL'/>
      <PedidosLista titulo='Pedidos Finalizados' pedidos={pedidosFinalizados} />
    </div>
  );
}

export default App;
