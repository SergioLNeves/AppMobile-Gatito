import { NavigationContainer } from "@react-navigation/native";
import { Carrinho } from "./telas/Carrinho/Carrinho";
import { Servicos } from "./telas/Servicos/Servicos";
import { cores } from "./estilos";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export const Tab = createMaterialBottomTabNavigator()

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Serviços"
        activeColor={cores.roxo}
        inactiveColor={cores.claro}
        barStyle={{ backgroundColor: cores.laranja }}
        keyboardHidesNavigationBar={true}
      >
        <Tab.Screen
          name="Serviços"
          component={Servicos}
          options={{
            tabBarLabel: 'Serviços',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={23} />
          }} />
        <Tab.Screen name="Carrinho"
          component={Carrinho}
          options={{
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="basket" color={color} size={23} />
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}