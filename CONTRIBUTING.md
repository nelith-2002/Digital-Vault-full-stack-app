# Contributing Guide

Thank you for considering contributing to the Expense Management Full-Stack App! This guide will help you get started.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and beginners
- Focus on constructive feedback
- Help others learn and grow

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Create a detailed issue with:
   - Description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, Node version, etc.)

### Suggesting Features

1. Check if the feature has been suggested
2. Create an issue describing:
   - The problem you're trying to solve
   - Your proposed solution
   - Any alternatives you've considered
   - Mockups or examples (if applicable)

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/Expense-Managment-Fullstack-app.git
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make your changes**
   - Follow the coding style
   - Write meaningful commit messages
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   - Test backend: `cd backend && npm start`
   - Test frontend: `cd frontend && npm start`
   - Verify all features work
   - Check for console errors

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add user profile feature"
   # or
   git commit -m "fix: resolve login authentication issue"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Include screenshots for UI changes
   - Wait for review

## Coding Standards

### JavaScript Style
- Use ES6+ features
- Use const/let, not var
- Use arrow functions where appropriate
- Use async/await for asynchronous code
- Use meaningful variable names

### React/React Native
- Use functional components with hooks
- Keep components small and focused
- Use PropTypes or TypeScript for type checking
- Follow React best practices

### Backend
- Use RESTful API design
- Validate all inputs
- Handle errors properly
- Write clear error messages
- Use appropriate HTTP status codes

### Commit Messages
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add expense filtering by category
fix: resolve authentication token expiry issue
docs: update API documentation
refactor: simplify expense service logic
```

## Project Structure

```
Expense-Management-Fullstack-app/
├── backend/              # Node.js/Express backend
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   └── server.js        # Server entry point
│
├── frontend/            # React Native frontend
│   ├── src/
│   │   ├── screens/    # Screen components
│   │   ├── components/ # Reusable components
│   │   ├── context/    # Context providers
│   │   ├── services/   # API services
│   │   └── utils/      # Utility functions
│   └── App.js          # App entry point
│
└── docs/               # Documentation
```

## Development Workflow

1. **Backend Development**
   ```bash
   cd backend
   npm run dev  # Uses nodemon for auto-reload
   ```

2. **Frontend Development**
   ```bash
   cd frontend
   npm start    # Starts Expo dev server
   ```

3. **Testing Changes**
   - Test on iOS simulator
   - Test on Android emulator
   - Test on physical device
   - Test API with Postman/curl

## Areas Needing Help

### High Priority
- [ ] Add unit tests for backend
- [ ] Add unit tests for frontend
- [ ] Implement data visualization (charts)
- [ ] Add export to CSV/PDF
- [ ] Implement budget tracking

### Medium Priority
- [ ] Add receipt image upload
- [ ] Implement recurring expenses
- [ ] Add multi-currency support
- [ ] Dark mode support
- [ ] Improve error handling

### Low Priority
- [ ] Add expense categories customization
- [ ] Implement expense sharing
- [ ] Add expense reports
- [ ] Social login (Google, Facebook)
- [ ] Biometric authentication

## Testing Guidelines

### Backend Testing
- Test all API endpoints
- Test authentication flows
- Test error cases
- Test edge cases

### Frontend Testing
- Test all screens
- Test navigation flows
- Test form validations
- Test error states
- Test loading states

## Documentation

When adding features:
- Update README.md if needed
- Update API documentation
- Add inline comments for complex code
- Update QUICKSTART.md if setup changes

## Questions?

- Open an issue for questions
- Check existing issues and PRs
- Join discussions in issues

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You!

Every contribution helps make this project better. Thank you for your time and effort! 🙏
