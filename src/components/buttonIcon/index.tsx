import { Image, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import DiscordIcon from '../../assets/discord.png';
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string
}

export const ButtonIcon = ({ title, ...rest}: ButtonProps) => {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordIcon} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}