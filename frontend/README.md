# Frontend Documentation

## Overview
The frontend is a React Native mobile application built with Expo, providing a cross-platform solution for iOS and Android.

## Architecture

### State Management
- **Context API**: Used for authentication state management
- **Local State**: Component-level state with React hooks

### Navigation
- **React Navigation**: Stack navigation for screen transitions
- **Auth Flow**: Conditional navigation based on authentication status

### Screens

#### LoginScreen
- Email and password authentication
- Navigation to registration
- Form validation

#### RegisterScreen  
- User registration with name, email, password
- Password confirmation
- Form validation

#### HomeScreen
- Display all expenses in a list
- Show total expenses
- Pull-to-refresh functionality
- Navigation to add/edit screens
- Logout functionality
- Delete expenses with confirmation

#### AddExpenseScreen
- Form to add or edit expenses
- Category selection
- Amount and description input
- Date handling
- Form validation

#### ExpenseDetailScreen
- Display full expense details
- Navigation to edit screen
- Back navigation

## Component Structure

### AuthContext
Provides authentication state and functions:
- `user`: Current user object
- `token`: JWT authentication token
- `loading`: Loading state during auth check
- `isAuthenticated`: Boolean authentication status
- `login(token, user)`: Function to log in user
- `logout()`: Function to log out user

### Services

#### api.js
- Axios instance configuration
- Base URL setup
- Request interceptor for adding auth tokens
- Error handling

#### expenseService.js
- `authService.register()`: Register new user
- `authService.login()`: Login user
- `expenseService.getAllExpenses()`: Fetch all expenses
- `expenseService.getExpense(id)`: Fetch single expense
- `expenseService.createExpense()`: Create new expense
- `expenseService.updateExpense(id)`: Update expense
- `expenseService.deleteExpense(id)`: Delete expense

## Styling

The app uses React Native StyleSheet for styling with:
- Consistent color scheme (#007AFF primary color)
- Responsive layouts
- Platform-specific adjustments
- Shadow and elevation for cards

## Data Flow

1. **Authentication Flow**
   - User logs in/registers
   - Token saved to AsyncStorage
   - User object saved to context
   - Navigation switches to authenticated screens

2. **Expense CRUD Flow**
   - Fetch expenses from API
   - Display in list
   - User actions trigger API calls
   - Update local state
   - Refresh list

## Configuration

### API URL Configuration
Update the API URL in `src/services/api.js`:

For emulator:
```javascript
const API_URL = 'http://localhost:5000/api';
```

For physical device (replace with your IP):
```javascript
const API_URL = 'http://192.168.1.XXX:5000/api';
```

For production:
```javascript
const API_URL = 'https://your-api.com/api';
```

## Running the App

### Development
```bash
npm start
# Then press:
# i - iOS Simulator
# a - Android Emulator
# Scan QR - Physical device with Expo Go
```

### Building for Production

#### iOS
```bash
expo build:ios
```

#### Android
```bash
expo build:android
```

## Testing on Physical Devices

1. Install Expo Go app from App Store / Play Store
2. Make sure phone and computer are on same network
3. Update API_URL to use computer's local IP address
4. Scan QR code with Expo Go

## Common Issues

### Cannot connect to API
- Check if backend server is running
- Verify API_URL is correct
- For physical device, use IP address instead of localhost
- Check firewall settings

### AsyncStorage Warnings
- AsyncStorage warnings are normal in development
- They don't affect functionality

### Navigation Errors
- Make sure all screens are properly registered
- Check navigation prop is passed correctly

## Dependencies

### Core Dependencies
- `react-native`: Core React Native library
- `expo`: Expo framework
- `react-navigation`: Navigation library
- `axios`: HTTP client
- `@react-native-async-storage/async-storage`: Local storage

### Navigation Dependencies
- `@react-navigation/native`: Navigation core
- `@react-navigation/native-stack`: Stack navigator
- `react-native-screens`: Native screen primitives
- `react-native-safe-area-context`: Safe area handling

### UI Dependencies
- `@react-native-picker/picker`: Dropdown picker component

## Performance Optimization

1. **FlatList Optimization**
   - Use `keyExtractor` for unique keys
   - Implement `getItemLayout` for known item sizes
   - Use `windowSize` prop for large lists

2. **Image Optimization**
   - Use appropriate image sizes
   - Implement lazy loading for images
   - Consider using FastImage for caching

3. **State Management**
   - Avoid unnecessary re-renders
   - Use React.memo for expensive components
   - Optimize context usage

## Future Enhancements

1. **Offline Support**
   - Implement local database (SQLite/Realm)
   - Sync when online
   - Queue API calls

2. **Enhanced UI**
   - Add animations
   - Implement dark mode
   - Add charts and visualizations

3. **Additional Features**
   - Push notifications
   - Receipt scanning
   - Export functionality
   - Budget tracking

## Troubleshooting

### Expo CLI not found
```bash
npm install -g expo-cli
```

### Metro bundler issues
```bash
expo start -c  # Clear cache
```

### Module not found errors
```bash
rm -rf node_modules
npm install
```

### iOS build issues
- Ensure Xcode is updated
- Clear derived data
- Try `expo start --ios --clear`

### Android build issues
- Check Android Studio is updated
- Verify Android SDK is properly configured
- Clear gradle cache if needed
