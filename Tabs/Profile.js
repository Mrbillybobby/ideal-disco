import reactDom from "react-dom";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}> About Anthony </Text>
      <Text style={styles.Para}> Hello my name is Anthony and I am a TXT texter. The Reason I'm in TXT is because I'm hoping 
      to become a TXT Coach and Hopefully be a huge part of TXT. Something I wanna be is a archietic because I wanna first make 
      a small bussniess to then design and create pretty modern Apartments and Candos and Hopefully to make the 
      South LA Area look better than it already is. </Text>

    {/*Image uri and Style*/}
     <Image source={{uri: 'https://alis.alberta.ca/media/697205/architect-istock-473849812.jpg?anchor=center&mode=crop&width=830&height=510&rnd=131992064960000000'}}
     style={{width: 300, height: 200, margin: 30, }}/>
  <Text style={styles.ParaTwo}>I chose this image because when I grow up I wanna be a archietic </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#022b3a",
    alignItems: "center",
    justifyContent: "center",
  },

  Header: {
 color: '#fff',
 fontWeight: 'bold',
 fontSize: 30,
 backgroundColor: '#1f7a8c',
 margin: 20,
 fontFamily: 'Courier New',
  },

  Para: {
 color: '#fff',
 fontSize: 20,
 fontFamily: 'Courier New',
 textAlign: "center",
  },

  ParaTwo: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Courier New',
    fontWeight: "bold"
  },

    
});
