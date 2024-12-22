import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log({ result });
}

// Uncommon error: WebBrowser.openBrowserAsync returns an unexpected result
// The function call may succeed without throwing an error, but the result object may contain unexpected values
// or missing keys, leading to unexpected behavior.

// Example:
// result could be undefined, null, or an object with unexpected properties.
// This could cause crashes or logic errors in applications relying on the result object.

// This issue is more likely to occur with specific browser configurations, network conditions,
or Expo versions.