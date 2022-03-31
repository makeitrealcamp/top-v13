import react from "react";
import { View, Button } from "react-native-web";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Profile section"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Go to Characters R&M"
        onPress={() => navigation.navigate("Characters")}
      />
    </View>
  );
};

export default Home;
