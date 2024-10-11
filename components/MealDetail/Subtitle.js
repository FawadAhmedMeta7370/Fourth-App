import {StyleSheet, View, Text} from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subtitlecontainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        marginTop: 5,
      },
      subtitlecontainer: {
        marginHorizontal: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#ff002b',
        paddingHorizontal: 5,
      },
});

export default Subtitle;