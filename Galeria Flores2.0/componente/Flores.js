import { View,Text,Image,ScrollView,StyleSheet} from "react-native";
import React from "react";


function Flores(props) {
    return(
        <View>
            <Text style={styles.titulo}>{props.nombre}</Text>
            <Image style={styles.Flores} source={props.imagen}/>
        </View>
    )
}

export default Flores;
const styles = StyleSheet.create({
    Flores:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,
    },
    titulo:{
        fontSize:12,
        fontWeight:'bold',
        color: 'blue',
    }
});

