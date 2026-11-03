import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color }) => (<FontAwesome name='home' size={24} color={'red'}></FontAwesome>)
        }}
      />
      <Drawer.Screen
        name="destinos"
        options={{
          drawerLabel: 'Destinos',
          title: 'Destinos',
          drawerIcon: ({ color }) => (<FontAwesome name='map-marker' size={24} color={'green'}></FontAwesome>)
        }}
      />
      <Drawer.Screen
        name="nosotros"
        options={{
          drawerLabel: 'Nosotros',
          title: 'Nosotros',
          drawerIcon: ({ color }) => (<FontAwesome name='envelope' size={24} color={'blue'}></FontAwesome>)
        }}
      />
      <Drawer.Screen
        name="contactos"
        options={{
          drawerLabel: 'Contactos',
          title: 'Contactos',
          drawerIcon: ({ color }) => (<FontAwesome name='comment' size={24} color={'pink'}></FontAwesome>)
        }}
      />
    </Drawer>
  );
}
