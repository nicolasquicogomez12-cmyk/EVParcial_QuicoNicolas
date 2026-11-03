import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const destinos = () => {
  const [personas, setPersonas] = useState(1);
  const precio = 60;

  const aumentar = () => {
    setPersonas(personas + 1);
  };

  const reducir = () => {
    if (personas > 1) {
      setPersonas(personas - 1);
    } else {
      alert('Debe viajar al menos una persona');
    }
  };

  const reiniciar = () => {
    setPersonas(1);
    alert('reiniciado');
  };

  const reservar = () => {
    alert('Reserva registrada. Total a pagar: S/ ' + personas * precio);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Nuestros destinos</Text>

        <View style={styles.tarjeta}>
          <Image source={require('@/assets/images/banner01.png')} style={{ width: 300, height: 150, resizeMode: 'contain' }}></Image>
          <Text style={styles.subtitulo}>City Tour</Text>
          <Text style={styles.parrafo}>Recorrido por los lugares más conocidos de la ciudad.</Text>
        </View>

        <View style={styles.tarjeta}>
          <Image source={require('@/assets/images/banner02.png')} style={{ width: 300, height: 150, resizeMode: 'contain' }}></Image>
          <Text style={styles.subtitulo}>Tour Panorámico</Text>
          <Text style={styles.parrafo}>Vistas de la ciudad desde sus principales miradores.</Text>
        </View>

        <View style={styles.tarjeta}>
          <Image source={require('@/assets/images/banner03.png')} style={{ width: 300, height: 150, resizeMode: 'contain' }}></Image>
          <Text style={styles.subtitulo}>Paseo por Avenidas</Text>
          <Text style={styles.parrafo}>Paseo tranquilo por avenidas y parques.</Text>
        </View>

        <Text style={styles.titulo}>Calcula tu viaje</Text>
        <Text style={{ textAlign: 'center' }}>Precio por persona: S/ {precio}</Text>
        <Text style={styles.numero}>{personas}</Text>
        <Text style={{ textAlign: 'center' }}>Total: S/ {personas * precio}</Text>

        <TouchableOpacity style={styles.boton} onPress={aumentar}>
          <Text style={styles.textoBoton}>Aumentar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={reducir}>
          <Text style={styles.textoBoton}>Reducir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={reiniciar}>
          <Text style={styles.textoBoton}>Reinicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonReservar} onPress={reservar}>
          <Text style={styles.textoBoton}>RESERVAR</Text>
        </TouchableOpacity>

        <View style={styles.pie}>
          <Text style={styles.texto}>Creado por Nicolas Quico</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default destinos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 26,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  numero: {
    fontSize: 60,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  botonReservar: {
    backgroundColor: 'darkorange',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    textAlign: 'center',
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
