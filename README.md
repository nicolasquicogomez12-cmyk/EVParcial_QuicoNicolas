# Tomy Viajes

App movil de una agencia de viajes hecha con React Native (Expo) y Expo Router con menu lateral (Drawer).

## Pantallas
Splash (3 segundos), Inicio, Destinos, Nosotros y Contactos.
- Destinos: tres tours y un contador de personas con el total a pagar.
- Contactos: formulario con alertas y redes sociales.

## Instalacion y ejecucion
```bash
npm install
npx expo start
```
Presionar `a` para el emulador de Android o escanear el QR con Expo Go.

## Generar el APK
```bash
npm install -g eas-cli
eas login
eas init
eas build -p android --profile preview
```

Creado por Nicolas Quico - © 2026 Todos los derechos reservados.
