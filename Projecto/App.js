import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fonttitulo}>Desarrollo de apps 2022</Text>
      <TextInput placeholder="Usuario" style={styles.Text} />
      <br></br>
      <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.Text} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FACA2A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fonttitulo: 
  {
    fontFamily: "Helvetica Neue, Arial, Sans Serif",
    fontSize: "64px",
    fontWeight: "bold",
  },

  fontbold: 
  {
    fontFamily: "Helvetica Neue, Arial, Sans Serif",
    fontSize: "24px",
    fontWeight: "bold",
  },

  fontregular: 
  {
    fontFamily: "Helvetica Neue, Arial, Sans Serif",
    fontSize: "24px",
    fontWeight: "normal",
  },

  Text:
  {
    fontFamily: "Helvetica Neue, Arial, Sans Serif",
    fontSize: "24px",
    fontWeight: "300",
    backgroundColor: "#fafafa",
  },
});
