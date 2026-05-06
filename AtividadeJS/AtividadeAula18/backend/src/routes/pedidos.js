import express, { Router } from 'express'
import Pedidos from '../controllers/PedidoController.js'

const router = express.Router();

router  
    .get('/pedido', Pedidos.getPedidos)
    .post('/pedido', Pedidos.novoPedido)
    .get('/pedidoID', Pedidos.pedidoByID)
    .put('/pedido', Pedidos.attPedido)
    .delete('/pedido', Pedidos.deletePedido)

export default router