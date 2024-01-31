export interface AuthState {
    isLoggedIn: boolean;
    newUser: boolean;
    token: string;
    selectedLanguage: 'en' | 'zh' | 'bn' | 'ms' | 'my' | 'si' | 'ta';
}
