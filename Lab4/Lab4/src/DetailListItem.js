import { View , StyleSheet} from "react-native";
import {Text} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailListIt=({icon, title, subtitle})=>{
    return (
        <View>
            <Icon name={icon} size={30} color="#000" />
            <Text variant="labelLarge">{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    subtitle:{
        color: '#1F1FFF'
    }
})

export default DetailListIt;