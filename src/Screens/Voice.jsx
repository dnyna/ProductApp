import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { micEvents, SpeechToText } from 'react-native-speech-convertor';

const Voice = () => {
   
    useEffect(() => {
        // Listen for recognized speech results
        const resultListener = micEvents.addListener('onSpeechResult', (text) => {
            console.log('Recognized text:', text);
            setText(text); // Update your state with the recognized text
        });

        // Listen for speech recognition errors
        const errorListener = micEvents.addListener('onSpeechError', (err) => {
            console.log('Speech error:', err);
        });

        // Clean up listeners on unmount
        return () => {
            resultListener.remove();
            errorListener.remove();
        };
    }, []);
     const [text, setText] = useState('');
    return (
        <View>
            <Button title="Start Listening" onPress={SpeechToText.startListening()} />
            <Button title="Stop Listening" onPress={SpeechToText.stopListening()} />
            <Text>Recognized Text: {text}</Text>
        </View>
    )
}

export default Voice