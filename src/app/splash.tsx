import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';

export default function Splash() {
  // a los 3 segundos entra a la app
  useEffect(() => {
    const tiempo = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3000);
    return () => clearTimeout(tiempo);
  }, []);

  return (
    <View style={styles.contenedor}>
      <Image source={require('@/assets/images/logo.png')} style={{ width: 200, height: 200 }}></Image>
      <Text style={styles.titulo}>TOMY VIAJES</Text>
      <Text style={styles.texto}>Cargando aplicación...</Text>
      <Text style={styles.texto}>Creado por Nicolas Quico</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#14325c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  texto: {
    fontSize: 16,
    color: 'white',
    marginTop: 15,
  },
});
