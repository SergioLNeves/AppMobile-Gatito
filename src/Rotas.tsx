import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Carrinho } from "./telas/Carrinho/Carrinho";
import { Servicos } from "./telas/Servicos/Servicos";

export const Tab = createBottomTabNavigator()

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}