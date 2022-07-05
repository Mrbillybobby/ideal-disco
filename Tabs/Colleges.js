import { StyleSheet, Text, View,FlatList, Image} from 'react-native';

export default function Colleges() {
    return (
      <View style={styles.container}>
        <Text style={styles.HeaderUni}> University Anthony Wants To Go To</Text>
        <FlatList
        data={[
          {key: 'USC'},
          {key: 'Berkley University'},
          {key: 'UC San Diego'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#022b3a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      color: '#fff',
 fontSize: 40,
 fontFamily: 'Courier New',
 textAlign: 'center',
    },
    HeaderUni: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      backgroundColor: '#1f7a8c',
      margin: 20,
      fontFamily: 'Courier New',
      textAlign: 'center',
       },
  });