import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Mari kita belajar React Native
      </Text>
      <StatusBar style="auto" />
      <Image style={styles.img} source={{uri: "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png"}} />
      <Button title="Click Me" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30
  },
  img: {
    height: 100,
    width: 100
  }
});
