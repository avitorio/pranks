# pranks

A collection of fun pranks for web pages, including a Matrix-style hacking effect and page rotation animations.

## Installation

```bash
npm install pranks
```

## Usage

### Hacker Effect

The hacker effect creates a "Matrix-style" animation with falling Japanese characters and a "YOU'VE BEEN HACKED" message.

#### ESM Import
```javascript
import 'pranks/hacker';
```

#### CommonJS Import
```javascript
require('pranks/hacker');
```

#### CDN Import
You can also include the effects directly via CDN:

```html
<!-- Hacker Effect -->
<script src="https://cdn.jsdelivr.net/npm/pranks/dist/pranks/hacker/index.js"></script>

<!-- Rotation Effect -->
<script src="https://cdn.jsdelivr.net/npm/pranks/dist/pranks/rotation/index.js"></script>
```

### Rotation Effect

The rotation effect allows you to add spinning animations to your webpage.

#### ESM Import
```javascript
import 'pranks/rotation';
```

#### CommonJS Import
```javascript
require('pranks/rotation');
```

## Hacker Effect Features
- Full-screen Matrix-style animation
- Text transformation effect with Japanese characters
- Responsive canvas that adjusts to window size
- Automatic execution when DOM is loaded
- Non-blocking animation using requestAnimationFrame
- Works with both module and script tag implementations

When activated, the hacker effect will:
1. Transform all text on the page into randomly changing Japanese characters
2. Create a Matrix-style rain effect with falling Japanese characters
3. Display a centered "YOU'VE BEEN HACKED" message
4. Change the page background to black with green text
5. Start the animation after a 3-second delay

## Technical Details
- Uses HTML5 Canvas for animations
- Written in TypeScript
- Automatically checks for DOM readiness
- Prevents multiple instances from running simultaneously
- Safe to use (doesn't affect scripts or styles)

## License

MIT 