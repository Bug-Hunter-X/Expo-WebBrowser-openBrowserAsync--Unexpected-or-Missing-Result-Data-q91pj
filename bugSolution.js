// Improved error handling for WebBrowser.openBrowserAsync
import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    if (result && result.type === 'success') {
      console.log('Browser opened successfully:', result);
    } else {
      console.error('Error opening browser:', result || 'No result returned');
      // Handle the error appropriately, perhaps showing an error message to the user
    }
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle the error appropriately
  }
}

// Additional considerations:
// 1. Add more robust error handling to account for different error types returned from WebBrowser.openBrowserAsync
// 2. Consider adding a timeout mechanism to prevent indefinite waits if the browser fails to respond.
// 3. If you require precise control over the browser lifecycle, explore using a more low-level library or platform-specific APIs.