import { View } from "react-native";
import { Text } from "@react-navigation/elements";


const AboutProps=(props:{
    tittle:string;
    description:string;

})=>{
    return(
        <View>
            <Text>{props.tittle}</Text>
            <Text>{props.description}</Text>
        </View>
    )
}
export default AboutProps;