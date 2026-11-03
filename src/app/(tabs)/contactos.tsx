import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const contactos = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const enviar = () => {
    if (nombre === '' || correo === '') {
      alert('Completa tu nombre y tu correo');
    } else {
      alert('Se envió correctamente');
      setNombre('');
      setCorreo('');
    }
  };

  const limpiar = () => {
    setNombre('');
    setCorreo('');
    alert('Se limpiaron los campos');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Contactos</Text>
        <Image source={require('@/assets/images/banner03.png')} style={{ width: 350, height: 150, resizeMode: 'contain' }}></Image>
        <Text style={styles.parrafo}>Si deseas más información de nuestros viajes, déjanos tus datos.</Text>

        <View style={styles.formulario}>
          <TextInput placeholder='Escribe tu nombre' style={styles.input} value={nombre} onChangeText={setNombre} />
          <TextInput placeholder='Escribe tu correo' style={styles.input} value={correo} onChangeText={setCorreo} />
          <TouchableOpacity style={styles.boton} onPress={enviar}>
            <Text style={{ textAlign: 'center', color: 'white' }}>ENVIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
            <Text style={{ textAlign: 'center', color: 'white' }}>LIMPIAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.redes}>
          <FontAwesome style={styles.icono} name='facebook' size={25} color={'blue'} onPress={() => Linking.openURL('https://www.facebook.com')}></FontAwesome>
          <FontAwesome style={styles.icono} name='youtube' size={25} color={'red'} onPress={() => Linking.openURL('https://www.youtube.com')}></FontAwesome>
          <FontAwesome style={styles.icono} name='whatsapp' size={25} color={'green'} onPress={() => Linking.openURL('https://wa.me/51900000000')}></FontAwesome>
        </View>

        <View style={styles.pie}>
          <Text style={styles.texto}>Creado por Nicolas Quico</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default contactos

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
  formulario: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  botonLimpiar: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  redes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icono: {
    backgroundColor: 'black',
    color: 'white',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  pie: {
    backgroundColor: '#14325c',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  texto: {
    color: 'white',
  },
})
