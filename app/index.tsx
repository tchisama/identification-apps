import { Menu } from "lucide-react-native";
import { Button, Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
export default function Page() {
  return (
    <View>
      <ImageBackground style={[tw`p-4`] } source={require('../assets/images/background.jpg')}>
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




                <ImageBackground style={[tw` justify-around `,{height: 400}] } imageStyle={{objectFit: 'contain'}} source={require('../assets/images/map.png')}>

                    <View>
                      <Text style={[tw`uppercase`,{fontSize: 35,color:"#3D5458" }]}>عبد الصمد الزلماضي</Text>
                      <Text style={[tw`uppercase font-bold`,{fontSize: 55,color:"#3D5458" }]}>مغربي فخور </Text>
                    </View>
                    <View style={[tw`items-end`] }>
                      <Text style={[tw`uppercase font-bold`,{fontSize: 80,color:"#3D5458" }]}>08:15</Text>
                      <Text style={[tw`uppercase `,{fontSize: 20,color:"#3D5458" }]}>15-25-2023</Text>
                    </View>
                </ImageBackground>




                <View style={[tw`items-center flex-row justify-between`,{height: 100}] }>
                        <ButtonMaDz>
                           🇲🇦
                           مغربي
                        </ButtonMaDz>
                        <View style={[tw`flex-1 h-8 relative`,{backgroundColor: "#3D545844"}] }>
                          <Text style={[tw`absolute text-center text-lg font-bold z-10 left-2`,{top:4}]}>130</Text>
                          <View style={{width:"30%",backgroundColor:"#fffa",height:"100%"}}></View>
                          <Text style={[tw`absolute text-center text-lg font-bold z-10 right-2`,{top:4}]}>100</Text>
                        </View>
                        <ButtonMaDz>
                          🇩🇿
                          جزائري
                        </ButtonMaDz>
                </View>
      </ImageBackground>
    </View>
  );
}



const ButtonMaDz = ({children}:{children: React.ReactNode}) => {

  return (
      <TouchableOpacity style={[tw`bg-white p-3 py-4 rounded-xl`] }>
        <Text>
          {children}
        </Text>
      </TouchableOpacity>
  );
}

