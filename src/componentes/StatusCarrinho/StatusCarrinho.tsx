import { Text, View } from "react-native";
import estilos, { EstiloStatusCarrinho } from "../../estilos";
import Botao from "../Botao/Botao";


interface TotalProps {
    total: number;
}

export default function StatusCarrinho({total}: TotalProps) {
    return <View style={EstiloStatusCarrinho.conteudo}>
        <View style={EstiloStatusCarrinho.total}>
            <Text style={EstiloStatusCarrinho.descricao}>Total do Carrinho:</Text>
            <Text style={EstiloStatusCarrinho.valor}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(total)}</Text>

        </View>
        <View style={EstiloStatusCarrinho.botao}>
            <Botao valor='Concluir Pedido' invertido acao={() => { }}/>
        </View>
    </View>
}