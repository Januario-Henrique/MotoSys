import { View } from "react-native"
// import { Text } from "react-native"
import AboutProps from "./aboutprops";

const Card=()=>{
    return(
        <View>
            <AboutProps
             tittle="About Us"
             description={`this is the about of the motosysy" `}
             />
        </View>

    )
};

// then here you have to imprt it where you want to use it

export default Card;