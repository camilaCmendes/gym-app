import { Heading, HStack, Image, Text, VStack, useTheme } from "native-base";
import { userPhoto } from "@assets/userPhotoDefault.png";
import { SignOut, UserCircle } from "@assets/index";
import { UserPhoto } from "./userPhoto";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";
import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

export const HomeHeader = () => {
  const { colors } = useTheme();
  const { user } = useAuth();
  return (
    <HStack
      bg={"gray.400"}
      pt={16}
      pb={5}
      px={8}
      alignItems={"center"}
      w={"full"}
    >
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
        alt="imagem do usuário"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá,
        </Text>
        <Heading color={"gray.100"} fontSize={"md"} fontFamily={"heading"}>
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity>
        <SignOut color={colors.gray[200]} width={32} height={32} />
      </TouchableOpacity>
    </HStack>
  );
};
