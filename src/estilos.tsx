import { StyleSheet } from "react-native";

export default StyleSheet.create({
    preencher: {
        flex: 1,
    }
})

export const cores = {
    roxo: '#A050BE',
    laranja: '#FABE50',
    escuro: '#555555',
    claro: '#fff',
    cinza: '#C7C7C7',
};

export const CustomItem = StyleSheet.create({
    informacao: {
        padding: 24,
    },
    nome: {
        color: cores.laranja,
        fontWeight: "bold",
        fontSize: 20,
    },
    calculo: {
        color: cores.escuro,
        fontSize: 14,
        marginVertical: 8,
    },
    preco: {
        color: cores.roxo,
        fontSize: 16,
        fontWeight: "bold",
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
    },
    carrinho: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    valor: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        flexWrap: "wrap",
    },
    descricao: {
        color: cores.escuro,
        fontSize: 16,
        marginRight: 8,
    },
    quantidade: {
        width: 42,
    },
});

export function CustomButao(pequeno = false, invertido = false) {
    return StyleSheet.create({
        botao: {
            width: 140,
            borderRadius: 50,
            paddingVertical: pequeno ? 3 : 9,
            paddingHorizontal: 20,
            backgroundColor: invertido ? cores.laranja : cores.roxo,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        valor: {
            fontWeight: 'bold',
            textAlign: 'center',
            color: invertido ? cores.roxo : cores.laranja,
        }
    });
}