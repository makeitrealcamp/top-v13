import react from "react";
import { View, Button } from "react-native-web";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Profile section"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </View>
  );
};

export default Home;
