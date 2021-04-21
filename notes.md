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

onPress={Keybord.dismiss}
