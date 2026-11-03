import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Tomy Viajes</Text>
        <Text style={styles.parrafo}>
          Somos una agencia de viajes. Te llevamos a conocer la ciudad de forma cómoda y segura.
        </Text>
        <Image source={require('@/assets/images/logo.png')} style={{ width: 300, height: 250, alignSelf: 'center' }}></Image>

        <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>¿Qué encontrarás?</Text>
          <Text style={styles.parrafo}>- Tours por la ciudad.</Text>
          <Text style={styles.parrafo}>- Precios para todos.</Text>
          <Text style={styles.parrafo}>- Atención rápida.</Text>
        </View>

        <TouchableOpacity style={styles.boton} onPress={() => router.push('/(tabs)/destinos')}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Ver destinos</Text>
        </TouchableOpacity>

        <View style={styles.pie}>
          <Text style={styles.texto}>Creado por Nicolas Quico</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 30,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  pie: {
    backgroundColor: '#14325c',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  texto: {
    color: 'white',
  },
})
