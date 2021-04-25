import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Clase from './clase.js'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>{Date()}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
var j=Clase.ale(false)
export default class App extends React.Component{
  state={
    hora:'',
    proxima:''
  }
  reloj=()=>{
    var hora,proxima
   const h=()=>{
      const fecha= new Date()
       hora = fecha.toLocaleTimeString()
        proxima=Clase.clase()
    }
    h()
    setInterval(() => {
      h()
      this.setState({
        hora:hora,
        proxima:proxima
      })
    }, 1000);
  }
  h=this.reloj()
  render(){
    return(
          <View style={styles.container}>
      <Text>Son las {this.state.hora}</Text>
      <Text>{this.state.proxima}</Text>
      <Button 
      title="True"
      onPress={Clase.hacer}/>
      <StatusBar style="auto" />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
