import {StyleSheet, View, Text} from 'react-native';

function MealsDetail({duration, complexity, affordability, style, text}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, text]}>{duration} - m</Text>
      <Text style={[styles.detailItem, text]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, text]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 5,
    fontSize: 15,
  },
});

export default MealsDetail;
