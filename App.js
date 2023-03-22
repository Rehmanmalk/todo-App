import { StyleSheet, Text, View, TextInput } from 'react-native';
import { YellowBox } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>


      <Text style={styles.text1}>Malik Rehman's Todo List.</Text>
      <View>
        <TextInput style={style11.firstInput} placeholder='Write Your Goal'     />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },

  text1: {
    color: 'red',
  }
});

const style11 = StyleSheet.create({

  firstInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'yellow',
  },


});
