import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



 function LoginPage() {
   const navigation = useNavigation();
   const enter = () => {
     navigation.navigate("Home")
   }

  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.text1}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style = {styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email input Field*/}
 
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                    color: 'black',
                }}
                _dark={{
                    color:"gray.300",
                }}
              />
            }
            
            variant="outline"
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400"
            }}
            _dark={{
               placeholderTextColor: "blueGray.50"
            }}
            
          />
          
          </View>

      </View>

      {/* Password Input Field*/}

      <View style={styles.buttonStyle1}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
                 <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color:"black"
                }}
                _dark={{
                  color:"gray.300"
                }}
                  />
            } 
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
                placeholderTextColor:"blueGray.400"
            }}
            _dark={{
                placeholderTextColor:"blueGray.50"
            }}
          />
        </View>
      </View>

      {/*Button*/}

      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign}
          onPress={enter}
        >
          LOGIN
        </Button>
      </View>

      {/* Line */}

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style ={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex:1, height:1, backgroundColor:'black'}} />
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
              backgroundColor:"gray.50",
          }}
          _dark={{
              backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1/1}>
            <Image
              roundedTop={10}
              alt="image"
              source={{
                uri:"https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
              }}
            />
            </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
              backgroundColor:"gray.50",
          }}
          _dark={{
              backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1/1}>
            <Image
              roundedTop={10}
              alt="image"
              source={{
                uri:"https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png"
              }}
              resizeMode="contain"
            
            
            />
            </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
              backgroundColor:"gray.50",
          }}
          _dark={{
              backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1/1}>
            <Image
              roundedTop={10} 
              alt="image"
              source={{
                uri:"https://www.transparentpng.com/thumb/twitter/twitter-bird-logo-pictures-0.png"
              }}
              resizeMode="contain"
            
            />
            </AspectRatio>
        </Box>
      </View>

    </View>
    
  );
 }
export default () => {
  return (
    <NativeBaseProvider>
      <LoginPage/>
    </NativeBaseProvider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold'
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  text1: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signupText: {
    fontWeight:'bold'
  },
  emailInput: {
    marginTop: 10,
    marginRight: 15,
    marginleft:15,
  },
  buttonStyle: {
    marginTop:30,
    marginLeft: 15,
    marginRight:15
  },
  buttonStyle1: {
    marginTop: 12,
    marginLeft: 15,
    marginRight:15
  },
  buttonDesign: {
    backgroundColor:'coral'
  },
  lineStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight:15,
    alignItems:'center'
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginleft: 15,
    marginRight: 15,
    justifyContent:'space-around'
    
  }
});
