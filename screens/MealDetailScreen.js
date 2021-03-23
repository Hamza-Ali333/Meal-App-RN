import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button title="Go Back to Category Meals" onPress={() => {
        props.navigation.navigate({routeName: 'Categories'});
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
