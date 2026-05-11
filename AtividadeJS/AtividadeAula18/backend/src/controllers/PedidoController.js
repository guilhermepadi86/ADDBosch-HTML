import { response } from "express"

const allPedidos = []

class Pedidos {

    static getPedidos = (req, res) => {
        res.status(200).send(allPedidos)
    }

    static novoPedido = (req, res) => {
        const pedido = req.body
        const lenPedidos = allPedidos.length - 1

        if (lenPedidos >= 0){
            pedido.id = allPedidos[lenPedidos].id + 1
        }
        else{
            pedido.id = 0
        }

        const valorTotal = pedido.itens.reduce((acc, p) => {
            return acc + (p.preco * p.quantidade)
        }, 0)
        
        const total = valorTotal.toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        
        pedido.total = total

        try{
            allPedidos.push(pedido)
            res.status(200).send({response: "Pedido Registrado"})
        }
        catch{
            res.status(500).send({response: "Ocorreu um erro ao tentar registrar"})
        }
        
    }

    static pedidoByID = (req, res) => {
        const pedidoID = req.body
        try{
            const pedido = allPedidos.find(p => p.id == pedidoID.id)
            res.status(200).send(pedido)
        }
        catch{
            res.status(500).send({response: "Ocorreu um erro ao tentar buscar pedido"})
        }
    }

    static attPedido = (req, res) => {
        const pedidoID = req.body
        
        try{
            const pedidoIndex = allPedidos.findIndex(p => p.id == pedidoID.id)
            allPedidos[pedidoIndex] = pedidoID
            res.status(200).send({response: "Pedido atualizado com sucesso"})
        }
        catch{
            res.status(500).send({response: "Erro ao atualizar"})
        }
        
    }

    static deletePedido = (req, res) => {
        const pedidoID = req.body
        
        try{
            const pedidoIndex = allPedidos.findIndex(p => p.id == pedidoID.id)
            if (pedidoIndex == -1){
                res.status(200).send({response: "Este pedido não existe"})
            }
            else{
                allPedidos.splice(pedidoIndex, 1)
                res.status(200).send({response: "Pedido excluido com sucesso"})    
            }
        }
        catch{
            res.status(500).send({response: "Erro ao atualizar"})
        }
        
    }
}

export default Pedidos