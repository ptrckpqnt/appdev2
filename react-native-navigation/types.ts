import { RouteProp } from "@react-navigation/native";

export type MoreStackParamList = {
    Settings: { userId: string };
    Profile: undefined;
};

export type RootTabParamList = {
    Home: undefined;
    More: {
        screen: keyof MoreStackParamList;
        params?: MoreStackParamList[keyof MoreStackParamList];
    };
};

type SettingsScreenRouteProp = RouteProp<MoreStackParamList, 'Settings'>;

export type SettingsProps = {
    route: SettingsScreenRouteProp;
};