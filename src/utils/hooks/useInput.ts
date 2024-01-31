import { useState } from 'react';

interface UseInputResult {
    value: string;
    onChangeText: (text: string) => void;
    clearInput: () => void;
    setValue: (text: string) => void;
}

const useInput = (initialValue: string): UseInputResult => {
    const [value, setValue] = useState<string>(initialValue);

    const onChangeText = (text: string) => {
        setValue(text);
    };

    const clearInput = () => {
        setValue('');
    };

    return {
        value,
        onChangeText,
        clearInput,
        setValue
    };
};

export default useInput;