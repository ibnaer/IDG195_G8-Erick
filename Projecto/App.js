import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fonttitulo}>Helvetica Neue</Text>
      <Text style={styles.fontbold}><br></br> Bold - ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</Text>
      <Text style={styles.fontregular}><br></br> Regular - ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</Text>
      <Text style={styles.fontlight}><br></br> Light - ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</Text>
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
    fontSize: "84px",
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

  fontlight:
  {
    fontFamily: "Helvetica Neue, Arial, Sans Serif",
    fontSize: "24px",
    fontWeight: "300",
  },
});
