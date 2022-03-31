import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./style";
const { container, item } = styles;

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();

      setCharacters(result.results);
    };

    getCharacters();
  }, []);

  console.log("Characters ", characters);

  return (
    <View style={container}>
      <Text>Rick and morthy</Text>
      {characters && (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={item}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Characters;
