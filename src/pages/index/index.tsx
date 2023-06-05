import { View, Text, Image } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

const Index = () => {
  const [title] = useState("Love You!!!");

  return (
    <View className="home">
      <Text> {title}</Text>
      <View>hahahahah11</View>
      <Image className="icon" src={require("../../assets/images/heart.webp")} />
    </View>
  );
};

export default Index;
