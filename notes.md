# React Native UI Elements

```
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,  // <--
  StyleSheet,
  Dimensions,  // <--
} from "react-native";
```

# Expo Install && Icons

**❯ expo install @expo/vector-icons**

<Feather style={styles.buttonIcon} name="chevron-right" />

# Expo Fonts

**❯ expo install expo-font @expo-google-fonts/jost**

importar na raiz do projeto (App.tsx)

```
import {
	useFonts,
	Jost_400Regular, Jost_600SemiBold
	} from '@expo-google-fonts/jost'
```

**❯ expo install expo-app-loading**
`import AppLoading from "expo-app-loading";`

<AppLoading/>

```
export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) return <AppLoading />;

  return <Welcome />;
```

// o AppLoading segura a splashScreen por mais tempo enquanto as fontes ainda não carregaram

# KeyboardAvoidingView

# Platform

```
     <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
	    >
```

# TextInput

```
	<TextInput
		style={[
			styles.input,
			(isFocused || isFilled) && { borderColor: colors.green },
		]}
		placeholder="Your Name"
		onBlur={handleInputBlur}
		onFocus={handleInputFocus}
		onChangeText={handleInputChange} // passa o valor de texto pra function chamada
	/>
```

# Navigation

// DOCS AT -> https://reactnavigation.org/docs/getting-started
// tem q instalar esse monte de coisa:

**yarn add @react-navigation/native**

**expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view**

**yarn add @react-navigation/stack**

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

repara o uso particular desses dois caras dentro da pasta routes

# TouchableWithoutFeedback

bom pra tirar o teclado com

<TouchableWithoutFeedback onPress={Keybord.dismiss}>

=====================================================================

#

# iPhoneX helper

**❯ yarn add react-native-iphone-x-helper --save**

**> yarn add json-server -g**

// json-server ./src/services/server.json --host 192.186.0.9 --port 3333

//❯ yarn run json-server ./src/services/server.json --host 127.0.0.1 --port 3333 --delay 1000

# svg no react native

**yarn add react-native-svg**

import { SvgFromUri } from "react-native-svg";

# Animação de Loading

**❯ expo install lottie-react-native**

=======================================

# Async Storage

**> yarn add react-native-async-storage/async-storage**

# Passar dados pelo router

MASTER
function handlePlantSelect(plant: PlantProps) {
navigation.navigate("PlantSave", { plant });
}

///

DETAIL
const route = useRoute();
const { plant } = route.params as Params;

# date[time]picker

**expo install @react-native-community/datetimepicker**

//import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
//

#

**❯ yarn add date-fns**

**❯ yarn add @react-navigation/bottom-tabs**

==================================

==================================

# keyboard não funciona no iOS?

Vai em:

Simulator > Hardware > Keyboard >

desmarque (ou marque e desmarque) a opção
✔ connect hardware keyboard
