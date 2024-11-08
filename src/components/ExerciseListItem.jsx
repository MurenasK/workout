import { StyleSheet, Text, View } from 'react-native';


export default function ExerciseListItem({item}) {
  return (
    <View style={ styles.exerciseContainer }>
      <Text style={ styles.exerciseName }>{item.name}</Text>
      <Text style={ styles.exerciseSubtitle }>
        Muscle: {item.muscle} | Equipment: {item.equipment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: 'ghostwhite',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,


    // shadow

  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgrey',
  },
});