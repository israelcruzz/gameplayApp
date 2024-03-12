import { View, Image, Text } from "react-native";
import ilustrationImage from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/buttonIcon";

export const Signin = () => {
  return (
    <View style={styles.container}>

      <Image source={ilustrationImage} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
      </View>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {"\n"}
        favoritos com seus amigos
      </Text>

      <ButtonIcon title="Entrar com o discord" activeOpacity={0.7} />
    </View>
  );
};
