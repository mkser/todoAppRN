import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.constent}>
          <View />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  constent: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
