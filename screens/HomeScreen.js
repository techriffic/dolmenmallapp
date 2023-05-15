import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {useNavigation} from '@react-navigation/native';
  
  const HomeScreen = () => {
    const [phone, setPhone] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [user, setUser] = useState();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+92');
  
   

  
  
  
  
  
    return (
      <View style={styles.container}>
        {/* image */}
        <View style={{backgroundColor: 'blue', opacity: 0.8}}>
          <Image
            source={{
              uri: 'https://w0.peakpx.com/wallpaper/161/101/HD-wallpaper-purple-city.jpg',
            }}
            style={{width: 450, height: 300}}
          />
        </View>
  
        <View
          style={{
            position: 'absolute',
            top: 30,
            left: 100,
            alignItems: 'center',
          }}>
          <View />
          <Text
            style={{
              fontSize: 40,
              color: 'white',
  
              fontWeight: 700,
            }}>
            Dolmen Mall 
          </Text>
        </View>
  
        <View style={styles.contain}>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 30,
              color: 'purple',
              fontWeight: 400,
            }}>
            Login
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 16,
              color: 'black',
              fontWeight: 400,
            }}>
            Continue as exsisting users
          </Text>
          <View style={styles.inputContainer}>
            {confirm < 1 ? (
              <SafeAreaView style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={{
                    width: '20%',
                    height: 45,
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                    }}>
                    {countryCode}
                  </Text>
                </TouchableOpacity>
  
               
                <TextInput
                  value={phone}
                  onChangeText={text => setPhone(text)}
                  placeholder="phone"
                  autoFocus
                  type="phonenumber"
                />
              </SafeAreaView>
            ) : (
              <TextInput
                value={code}
                onChangeText={text => setCode(text)}
                placeholder="code"
                secureTextEntry
                type="password"
              />
            )}
          </View>
  
        
        </View>
      </View>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    contain: {
      flex: 1,
      backgroundColor: 'white',
      positon: 'absolute',
      bottom: 100,
      borderRadius: 20,
      padding: 30,
    },
  
    inputContainer: {
      width: 300,
      marginTop: 30,
      alignSelf: 'center',
    },
  
    button: {
      width: 200,
      marginTop: 10,
    },
    buttonLogin: {
      width: 200,
      marginTop: 10,
      backgroundColor: 'purple',
      color: 'white',
      borderRadius: 30,
      alignSelf: 'center',
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
  
      elevation: 24,
    },
  
    buttonRegister: {
      width: 200,
      marginTop: 10,
      backgroundColor: 'black',
      color: 'white',
      borderRadius: 30,
      alignSelf: 'center',
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
  
      elevation: 24,
    },
    countryCodePicker: {
      alignSelf: 'center',
    },
    togglerContainerStyle: {
      backgroundColor: '#baffc0',
      borderRadius: 10,
      padding: 5,
    },
    togglerLabelStyle: {
      fontSize: 20,
    },
    searchInputStyle: {
      borderColor: '#888888',
      borderWidth: 1,
      height: 36,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    pickerItemLabelStyle: {
      marginLeft: 10,
      marginVertical: 10,
      alignSelf: 'center',
    },
    pickerItemContainerStyle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignSelf: 'center',
    },
  });