import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Heading from './app/Heading';
import Input from './app/Input';

class App extends Component {

  constructor(){
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.constent}>
          <Heading />
          <Input />
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
