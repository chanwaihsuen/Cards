import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text } from 'react-native';

export default function Anchor({ href, onPress, children, ...otherProps }) {
  function handleOpenWithWebBrowser() {
    try {
      if (/^https?:\/\//.test(href)) {
        WebBrowser.openBrowserAsync(href);
      } else {
        Linking.openURL(href);
      }

      onPress && onPress();
    } catch (error) {
      // @todo handle message
      console.log(error.message);
    }
  }

  return (
    <Text {...otherProps} onPress={handleOpenWithWebBrowser}>
      {children}
    </Text>
  );
}
