import { Group } from "@components/group";
import { HomeHeader } from "@components/homeHeader";
import { FlatList, VStack } from "native-base";

import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("Costas");
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "ombro",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
