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

    ProjectDetailsStack: any | undefined;
    ProjectTimelineStack: any | undefined;
    ProjectChatStack: any | undefined;

    ProjectDetailsScreen: any | undefined;
    ProjectTimelineScreen: any | undefined;
    ProjectChatScreen: any | undefined;

    ProjectTaskDetailsScreen: any | undefined;
    ProjectTasksScreen: any | undefined;



    /**
     * 
     * Transaction History
     * 
     */


}