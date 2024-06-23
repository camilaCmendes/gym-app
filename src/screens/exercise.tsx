import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
  useTheme,
  ScrollView,
  useToast,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Person, Repeat, Barbell } from "@assets/index";
import { Button } from "@components/button";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";
import { useEffect, useState } from "react";
import { ExerciseDTO } from "@dtos/exerciseDTO";
import { Loading } from "@components/loading";

type RouteParamsProps = {
  exerciseId: string;
};

export const Exercise = () => {
  const SVG_SIZE = 24;
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const toast = useToast();
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);

  const { exerciseId } = route.params as RouteParamsProps;

  const fetchExerciseDetails = async () => {
    try {
      setIsLoading(true);
      const { data } = await api(`/exercises/${exerciseId}`);
      setExercise(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    console.log({ exerciseId });
    if (exerciseId) fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <VStack px={8} bg="gray.600" pt={12}>
            <TouchableOpacity onPress={handleGoBack}>
              <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
            </TouchableOpacity>
            <HStack
              justifyContent="space-between"
              mt={4}
              mb={8}
              alignItems="center"
            >
              <Heading
                color="gray.100"
                fontSize="lg"
                flexShrink={1}
                fontFamily={"heading"}
              >
                {exercise?.name}
              </Heading>

              <HStack alignItems="center">
                <Person width={18} height={18} color={colors.gray[300]} />

                <Text color="gray.200" ml={1} textTransform="capitalize">
                  {exercise?.group}
                </Text>
              </HStack>
            </HStack>
          </VStack>
          <ScrollView>
            <VStack p={8}>
              <Box rounded="lg" mb={"3"} overflow={"hidden"}>
                <Image
                  w="full"
                  h={80}
                  source={{
                    uri: `${api.defaults.baseURL}/exercise/demo/${exercise?.demo}`,
                  }}
                  alt="Nome do exercício"
                  resizeMode="cover"
                  rounded="lg"
                />
              </Box>
              <Box bg="gray.600" rounded="md" pb={4} px={4}>
                <HStack
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  mb={6}
                  mt={5}
                >
                  <HStack>
                    <Barbell
                      width={SVG_SIZE}
                      height={SVG_SIZE}
                      color={colors.green[700]}
                    />
                    <Text color="gray.200" ml="2">
                      {exercise?.series} séries
                    </Text>
                  </HStack>
                  <HStack>
                    <Repeat
                      width={SVG_SIZE}
                      height={SVG_SIZE}
                      color={colors.green[700]}
                    />
                    <Text color="gray.200" ml="2">
                      {exercise?.repetitions} repetições
                    </Text>
                  </HStack>
                </HStack>
                <Button title="Marcar como realizado" />
              </Box>
            </VStack>
          </ScrollView>
        </>
      )}
    </VStack>
  );
};
