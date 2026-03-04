# Contributing to Fabric

Thank you for your interest in contributing to Fabric! This document provides guidelines and best practices for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/fabric-ecommerce.git
cd fabric-ecommerce
```

2. Open `index.html` in your browser or use a local server
```bash
npx http-server -p 8000
```

## 💻 Development Workflow

### File Organization

```
├── index.html       # HTML structure
├── styles.css       # All styling
├── script.js        # All JavaScript
├── README.md        # Project documentation
└── CONTRIBUTING.md  # This file
```

### Making Changes

1. Create a new branch for your feature
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following the coding standards below

3. Test your changes across different browsers

4. Commit your changes with a descriptive message

5. Push to your branch and create a Pull Request

## 📝 Coding Standards

### HTML Standards

#### ✅ DO:
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, etc.)
- Include proper ARIA labels for accessibility
- Add meaningful alt text for all images
- Use proper heading hierarchy (h1 → h2 → h3)
- Include `loading="lazy"` for images below the fold
- Use `rel="noopener noreferrer"` for external links

#### ❌ DON'T:
- Use divs when semantic elements are available
- Skip heading levels
- Leave images without alt text
- Use inline styles (use classes instead)
- Forget to close tags

#### Example:
```html
<!-- ✅ GOOD -->
<section class="products-section" aria-labelledby="products-title">
  <h2 id="products-title">New Arrivals</h2>
  <article class="product-card">
    <img src="image.jpg" alt="Descriptive alt text" loading="lazy">
  </article>
</section>

<!-- ❌ BAD -->
<div class="products">
  <div class="title">New Arrivals</div>
  <div class="product">
    <img src="image.jpg">
  </div>
</div>
```

### CSS Standards

#### ✅ DO:
- Use CSS custom properties (variables) for repeated values
- Organize CSS by sections with clear comments
- Use mobile-first responsive design
- Follow BEM-like naming convention
- Group related properties together
- Use shorthand properties when appropriate
- Add transitions for interactive elements

#### ❌ DON'T:
- Use !important (except for utility classes)
- Use inline styles
- Use IDs for styling (use classes)
- Hard-code colors/sizes (use variables)
- Create overly specific selectors

#### Example:
```css
/* ✅ GOOD */
:root {
  --color-primary: #1a1a1a;
  --spacing-md: 1rem;
}

.product-card {
  padding: var(--spacing-md);
  color: var(--color-primary);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

/* ❌ BAD */
#product1 {
  padding: 16px !important;
  color: #1a1a1a;
}

div.container > div.product > div.card {
  /* overly specific */
}
```

### JavaScript Standards

#### ✅ DO:
- Use ES6+ features (const, let, arrow functions, etc.)
- Write modular, reusable functions
- Add JSDoc comments for functions
- Handle errors gracefully
- Use meaningful variable and function names
- Validate user input
- Use event delegation when appropriate
- Debounce/throttle expensive operations

#### ❌ DON'T:
- Use var (use const or let)
- Write functions longer than 50 lines
- Ignore error handling
- Use global variables unnecessarily
- Forget to clean up event listeners
- Use magic numbers (define constants instead)

#### Example:
```javascript
// ✅ GOOD
/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} Whether email is valid
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const EMAIL_DEBOUNCE_TIME = 300;
const debouncedValidation = debounce(validateEmail, EMAIL_DEBOUNCE_TIME);

// ❌ BAD
var checkEmail = function(e) {
  if (e.indexOf('@') > -1) {
    return true;
  }
  return false;
}

setTimeout(someFunction, 300); // magic number
```

### Accessibility Standards

#### Requirements:
- All interactive elements must be keyboard accessible
- Include ARIA labels where appropriate
- Maintain sufficient color contrast (WCAG AA minimum)
- Provide focus indicators
- Use semantic HTML
- Test with screen readers

#### Example:
```html
<!-- ✅ GOOD -->
<button class="icon-button" aria-label="Search products">
  <svg aria-hidden="true">...</svg>
</button>

<nav aria-label="Main navigation">
  <a href="#main-content">Skip to main content</a>
</nav>

<!-- ❌ BAD -->
<div onclick="search()">
  <svg>...</svg>
</div>
```

## 📦 Commit Guidelines

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Types:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no code change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples:

```bash
# ✅ GOOD
feat: add product filter functionality

Added ability to filter products by category, price, and color.
Includes responsive design and keyboard navigation.

Closes #123

# ✅ GOOD
fix: correct email validation regex

Previous regex didn't handle international domains.
Updated to support all valid email formats.

# ❌ BAD
updated stuff

# ❌ BAD
Fixed a bug
```

## 🔄 Pull Request Process

### Before Submitting

1. **Test your changes**
   - Test in Chrome, Firefox, Safari, and Edge
   - Test on mobile devices
   - Test keyboard navigation
   - Test with screen reader (if applicable)

2. **Code Quality**
   - Run linter if available
   - Check for console errors
   - Validate HTML
   - Ensure responsive design works

3. **Documentation**
   - Update README if needed
   - Add comments for complex logic
   - Update relevant documentation

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Tested keyboard navigation
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] Changes are responsive
- [ ] Changes are accessible
```

## 🐛 Bug Reports

### Include:
- Clear, descriptive title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and version
- Screenshots (if applicable)
- Console errors (if any)

## 💡 Feature Requests

### Include:
- Clear, descriptive title
- Problem it solves
- Proposed solution
- Alternative solutions considered
- Mockups/examples (if applicable)

## 🎨 Style Guide Summary

### Naming Conventions

**CSS Classes:**
- Use kebab-case: `.product-card`, `.hero-section`
- Be descriptive: `.email-submit` not `.btn1`
- Follow BEM-like patterns: `.card__title`, `.card--featured`

**JavaScript:**
- Use camelCase for variables/functions: `isValidEmail`, `productCard`
- Use PascalCase for constructors: `ProductCard`
- Use UPPER_SNAKE_CASE for constants: `MAX_PRODUCTS`, `API_URL`

**Files:**
- Use kebab-case: `product-details.html`
- Be descriptive: `email-validation.js` not `utils.js`

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## ❓ Questions?

Feel free to open an issue for any questions about contributing!

---

Thank you for contributing to Fabric! 🎉
