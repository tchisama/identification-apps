import { Menu } from "lucide-react-native";
import { Button, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
export default function Page() {
  return (
    <View style={[tw`flex-1 p-4`]}>
      <View style={[tw`flex-row items-center justify-between `]}>
          <Image style={[tw`w-10 h-10`] } source={require('../assets/images/morocco.png')} />
          <View style={[tw`items-center`]}>
            <Text style={[tw`text-4xl uppercase opacity-60`]}>المغرب</Text>
            <View style={[tw`flex-row`]}>
            {
              ("morocco").split("").map((c, i) => <Text style={[tw`text-sm mx-1 uppercase opacity-60`] } key={i}>{c}</Text>)
            }
            </View>
          </View>
          <TouchableOpacity>
            <Menu size={24} color="black"/>
          </TouchableOpacity>
      </View>
    </View>
  );
}

