import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_STORAGE } from "./storageConfig";
import { UserDTO } from "@dtos/userDTO";

export const storageUserSave = async (user: UserDTO) => {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
};

export const storageUserGet = async () => {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const user: UserDTO = storage ? JSON.parse(storage) : {};

  return user;
};

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE);
}
