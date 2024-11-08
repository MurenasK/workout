import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';
import { useState } from 'react';

export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find(item => item.name == params.name);

  const [isInstuctionExpanded, setIsInstructionExpanded] = useState(false);

  if(!exercise) {
    return (
      <Text>Exercise not found!</Text>
    )
  }

  return (
    <ScrollView style={ styles.container }>
      <Stack.Screen options={{title: exercise.name}} />
      <View style={ styles.panel }>
        <Text style={ styles.exerciseName }>{exercise.name}</Text>
        <Text style={ styles.exerciseSubtitle }>
          <Text style={styles.subValue}>{exercise.muscle}</Text> | {' '}
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions} numberOfLines={isInstuctionExpanded ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Text onPress={() => setIsInstructionExpanded(!isInstuctionExpanded)}
              style={styles.seeMore}
        >
          {isInstuctionExpanded? 'See Less' : 'See More'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgrey',
  },
  seeMore: {
    alignSelf: 'center',
    padding: 10,
    fontWeight: '500',
    color: 'grey',
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  }
});