import {Redirect, Tabs, Link} from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import { useUserStore } from "../../store/useStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

export default function Layout() {
    const hasFinishedOnboarding = useUserStore((state) => state.hasFinishedOnboarding);


    if (!hasFinishedOnboarding) {
        return <Redirect href="/onboarding" />
    }
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor : theme.colorGreen}}>
            <Tabs.Screen name="home" options={{title: "Plantly",
            tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => <Entypo name="leaf" size={size} color={color} />,
                headerRight: () => (
           <Link href="/new" asChild>
             <Pressable hitSlop={20} style={{ marginRight: 18 }}>
               <AntDesign
                name="plus-circle"
                size={24}
                color={theme.colorGreen}
            />
             </Pressable>
           </Link>
         ),
            }} />
            <Tabs.Screen name="profile" options={{title: "Profile",
             tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => <Feather name="user" size={size} color={color} />
            }} />
            
        </Tabs>
    );
}
