import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParams = {

    SplashScreen: any | undefined;

    /**
     * 
     * Authentications
     * 
     */
    LoginScreen: any | undefined;
    ResetPassword: any | undefined;

    /**
     * 
     * Home
     * 
     */
    HomeScreen: any | undefined

    /**
     * 
     * Project
     * 
     */
    ProjectBottomNavigation: any | undefined;
    ProjectHomeScreen: any | undefined;


    /**
     * 
     * Transaction History
     * 
     */


}