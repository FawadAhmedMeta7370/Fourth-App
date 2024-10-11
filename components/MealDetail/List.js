import {StyleSheet, View, Text} from 'react-native';

function List({data}) {
  return data.map((dataPoint) => (
    <View style={styles.listitem} key={dataPoint}>
      <Text style={styles.itemtext}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
    listitem: {
        backgroundColor: '#ff9dad',
        borderRadius: 10,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 25,
    },
    itemtext: {
        fontSize: 17,
        textAlign: 'center',
        color: 'black'
    }
});

export default List;
