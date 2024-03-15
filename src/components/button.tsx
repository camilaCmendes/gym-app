import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export const Button: React.FC<Props> = ({
  title,
  variant = "solid",
  ...rest
}) => {
  return (
    <ButtonNativeBase
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"green.500"}
      w={"full"}
      h={14}
      rounded={"sm"}
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily={"heading"}
        fontSize={"sm"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
