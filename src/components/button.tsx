import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <ButtonNativeBase
      bg={"green.700"}
      w={"full"}
      h={14}
      rounded={"sm"}
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Text color={"white"} fontFamily={"heading"} fontSize={"sm"}>
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
