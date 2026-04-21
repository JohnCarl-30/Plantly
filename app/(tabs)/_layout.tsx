import {Redirect, Tabs} from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import { useUserStore } from "../../store/useStore";

export default function Layout() {
    const hasFinishedOnboarding = useUserStore((state) => state.hasFinishedOnboarding);


    if (!hasFinishedOnboarding) {
        return <Redirect href="/onboarding" />
    }
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor : theme.colorGreen}}>
            <Tabs.Screen name="index" options={{title: "Plantly",
            tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => <Entypo name="leaf" size={size} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{title: "Profile",
             tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => <Feather name="user" size={size} color={color} />
            }} />
            
        </Tabs>
    );
}
