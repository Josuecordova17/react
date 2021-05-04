import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
var position; 
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>{Date()}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const getPosition = async () => {
  try {
    const { coords } = await Location.getCurrentPositionAsync({});
    position=coords
    mandar(coords)
  } catch (error) {
    console.log("getPosition -> error", error);
    setPosition(null);
  }
};
const entryPoint = async () => {
  try {
    const { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      getPosition();
    }
  } catch (error) {
    console.log("getPermissionAndPosition -> error", error);
  }
}; 
entryPoint()
function mandar(coords) {
  const url='http://192.168.0.8:3000/'
       let data={
           ubi:coords,
           hora:Date()
       }
            fetch(url, {
       method: 'PUT', // or 'PUT'
       body: JSON.stringify(data), // data can be `string` or {object}!
       headers:{
         'Content-Type': 'application/json',
       }
     }).then(res => res.json())
     .catch(error => console.error('Error:', error))
     .then(()=>{
       console.log('salio bien');
     });
}
setInterval(() => {
  getPosition()
}, 1000);
export default class App extends React.Component{
  state={
    hora:'',
    proxima:''
  }
  render(){
    return(
      <View style={styles.container}>
      {(position && (
        <View>
          <View>
            <Text>Latitude: {position.latitude}</Text>
          </View>
          <View>
            <Text>Longitude: {position.longitude} </Text>
          </View>
          <View>
            <Button title="Refresh" onPress={getPosition} />
          </View>
        </View>
      )) || (
        <View>
          <Text>GPS Unavailable</Text>
        </View>
      )}
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
