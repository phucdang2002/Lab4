import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailListIt = ({icon, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} color="#000" size={30} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    flex: 7,
  },
  title: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#1F1FFF',
    fontSize: 15,
    padding: 5,
  },
});

export default DetailListIt;
