import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

import { toastComponents } from 'components/Toast'

import { RootState } from 'store'

import RootStack from 'stacks/Root.stack'

import zhLang from 'compiled-lang/zh.json'
import idLang from 'compiled-lang/id.json'
import msLang from 'compiled-lang/ms.json'
import enLang from 'compiled-lang/en.json'
import Toast from 'react-native-toast-message'

const AppEntry = () => {
    const { selectedLanguage } = useSelector((state: RootState) => state.auth)
    const [languagePack, setLanguagePack] = useState<any>(enLang);
    const toastConfig = {
        success: toastComponents.success,
        info: toastComponents.info,
        warning: toastComponents.warning,
        error: toastComponents.error,
    }

    const loadAppLanguage = (locale: string) => {
        switch (locale) {
            case 'id':
                return idLang
            case 'ms':
                return msLang
            case 'zh':
                return zhLang
            default:
                return enLang
        }
    }

    useEffect(() => {
        if (selectedLanguage) {
            const language = loadAppLanguage(selectedLanguage)
            setLanguagePack(language)
        }
    }, [selectedLanguage])
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <IntlProvider defaultLocale='en' locale={selectedLanguage || 'en'} messages={languagePack}>
                    {languagePack && (
                        <RootStack />
                    )}
                </IntlProvider>
                <Toast config={toastConfig} />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

export default AppEntry