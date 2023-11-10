import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const SignupPage = () => {
  const navigation = useNavigation();
  return (
    <View style ={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.LoginText}>Signup</Text>
      </View>
      <View style ={styles.text2}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.sigupText}>Login</Text>

        </TouchableOpacity>
      </View>
      {/* Username */}
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                
              />
          }
            variant="outline"
            placeholder="Username"
          
          />

        </View>

      </View>
        {/* Email Field */}
        <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
               
              />
          }
            variant="outline"
            placeholder="email"
           
          />

        </View>

      </View>
        {/* Password */}
        <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
               
              />
          }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            
          />

        </View>

      </View>
        {/* repeat Password*/}
        <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
               
              />
          }
            variant="outline"
            secureTextEntry={true}
            placeholder="Repeat Password"
           
          />

        </View>

      </View>

      {/* Button */}
      
      <View style={styles.buttonStylex}>
        <Button style={styles.buttonDesign}>
          REGISTER NOW
        </Button>
      </View>

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{width:50, textAlign:'center'}}>Or</Text>
        </View>
        <View style={{flex:1, height:1,backgroundColor:'black'}} />
      </View>

      {/* Box */}
      
      <View style={styles.boxStyle}>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
         
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
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          
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
          
        >
          <AspectRatio ratio={1/1}>
            <Image
              roundedTop={10} 
              alt="image"
              source={{
                uri:"https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
              }}
              resizeMode="contain"
            
            />
            </AspectRatio>
        </Box>
      </View>
  
    </View>
  );
};
export default () => {
  return (
    <NativeBaseProvider>
      <SignupPage/>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold'
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:5,
  },
  signupText: {
    fontWeight:'bold'
  },
  emailInput: {
    marginTop: 10,
    marginLeft:15,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight:15,
  },
  buttonStylex: {
    marginTop: 12,
    marginLeft: 30,
    marginRight: 15
  },
  buttonDesign: {
    backgroundColor:"coral"
  },
  lineStyle: {
    flexDirection: 'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center',
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent:'space-around',
  }
})

