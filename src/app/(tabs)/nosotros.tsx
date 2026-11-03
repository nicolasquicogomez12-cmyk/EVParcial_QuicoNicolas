import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const nosotros = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Nosotros</Text>
        <Image source={require('@/assets/images/logo.png')} style={{ width: 200, height: 170, alignSelf: 'center' }}></Image>
        <Text style={styles.parrafo}>
          Somos una empresa de servicio turístico y de transporte. Queremos que cada viaje sea cómodo, puntual y seguro.
        </Text>

        <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>Misión</Text>
          <Text style={styles.parrafo}>Brindar un buen servicio de viajes a todos nuestros clientes.</Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>Visión</Text>
          <Text style={styles.parrafo}>Ser la agencia de viajes preferida de la ciudad.</Text>
        </View>

        <View style={styles.pie}>
          <Text style={styles.texto}>Creado por Nicolas Quico</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default nosotros

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
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
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
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
