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

# TextInput,

# KeyboardAvoidingView

# Platform

```
     <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
	    >
```
