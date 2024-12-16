```javascript
// bug.js
import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Using MaterialCommunityIcons

export default function App() {
  return (
    <View>
      <MaterialCommunityIcons name="account-circle" size={32} color="black" /> {/* Correct Icon*/}
      <MaterialCommunityIcons name="nonExistentIcon" size={32} color="black" /> {/* Incorrect Icon*/}
      <Text>Some text</Text>
    </View>
  );
}
```
```javascript
// bugSolution.js
import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Switching to FontAwesome

export default function App() {
  return (
    <View>
      <FontAwesome name="user" size={32} color="black" /> {/* Correct Icon from FontAwesome*/}
      <Text>Some text</Text>
    </View>
  );
}
```