import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { CardCharacter } from "./Card";
import { getCharactersAsync } from "../api/characters";

import { styles } from "./style";
const { container, item } = styles;

const Characters = () => {
  const [data, setData] = useState({
    characters: [],
    currentPage: 0,
  });

  const getCharacters = async () => {
    let page = data.currentPage;
    page = page + 1;
    if (page <= 42) {
      const dataCharacters = await getCharactersAsync(page);
      setData((state) => ({
        characters: [...state.characters, ...dataCharacters.results],
        currentPage: page,
      }));
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const { characters } = data;

  return (
    <View style={container}>
      {characters && (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListFooterComponent={() => (
            <Text
              style={{
                fontSize: 30,
              }}
            >
              Cargando...
            </Text>
          )}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => <CardCharacter item={item} />}
          onEndReached={() => {
            getCharacters();
          }}
        />
      )}
    </View>
  );
};

export default Characters;
