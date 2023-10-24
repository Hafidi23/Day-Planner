/*import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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


export default function LoginPage() {
  const navigation = useNavigation();

  return (<NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.text1}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignupPage");
          }}
        >
          <Text style = {styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email input Field*/
 
   /*   <View style={styles.butttoStyle}>
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

      {/* Password Input Field*/

     /* <View style={styles.buttonStyle1}>
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

      {/*Button*/

    /*  <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign}>
          LOGIN
        </Button>
      </View>

      {/* Line */

    /*  <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style ={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex:1, height:1, backgroundColor:'black'}} />
      </View>

      {/* Box */
    /*  <View style={styles.boxStyle}>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80 }}
          shadow={3}
          _light={{
              backgroundColor:"gray.50",
          }}
          _dark={{
              backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1/1}>
            
            </AspectRatio>
          </Box>

      </View>

    </View>
    </NativeBaseProvider>
  );
}/*

const styles = StyleSheet.create({
  container: {},
});
