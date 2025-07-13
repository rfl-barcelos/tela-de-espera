
type Props = {
  pedidoFinalizado: string;
};

function PedidoFinalizado({ pedidoFinalizado }: Props) {
    return (
        <div className= "h-100 w-50 d-flex align-items-center flex-column border border-dark border-2 rounded p-3">
            <p className="fs-1 fonte-tela-pedidos">Pedido Pronto</p>
            <p className="fonte-pedido-finalizado blink"> {pedidoFinalizado} </p>
        </div>
  );
}

export default PedidoFinalizado;