Below is a **complete, production-ready `README.md`** for your npm package
**`react-christmas-effects`** 🎄❄️🎆

You can **copy–paste this directly** into `README.md`.

---

````md
# 🎄 react-christmas-effects ❄️🎆

Add beautiful **Christmas snow** and **firecracker (fireworks) effects** to your React application — automatically shown **only in December**.

✔ Lightweight  
✔ No config required  
✔ December-only by default  
✔ Works with Vite, CRA, Next.js (client-side)  
✔ Fully customizable  

---

## ✨ Demo

Snow falling ❄️  
Firecrackers bursting 🎆  
"Merry Christmas" message 🎄  

> Automatically activates from **December 1st to December 31st**

---

## 📦 Installation

```bash
npm install react-christmas-effects
````

or

```bash
yarn add react-christmas-effects
```

or

```bash
pnpm add react-christmas-effects
```

---

## 🚀 Basic Usage

```jsx
import { ChristmasEffects } from "react-christmas-effects";

function App() {
  return <ChristmasEffects />;
}

export default App;
```

That’s it 🎉
Your app will now show Christmas effects **only in December**.

---

## 🧪 Force Enable (for testing)

If you want to test outside December:

```jsx
<ChristmasEffects force />
```

---

## 🎛️ Props API

### `<ChristmasEffects />`

| Prop               | Type      | Default                   | Description               |
| ------------------ | --------- | ------------------------- | ------------------------- |
| `text`             | `string`  | `"🎄 Merry Christmas 🎄"` | Text displayed on screen  |
| `snowflakeCount`   | `number`  | `200`                     | Number of snowflakes      |
| `showText`         | `boolean` | `true`                    | Show / hide message text  |
| `fireworks`        | `boolean` | `true`                    | Enable firecrackers       |
| `fireworkInterval` | `number`  | `12000`                   | Firecracker interval (ms) |
| `startDay`         | `number`  | `1`                       | Start day in December     |
| `endDay`           | `number`  | `31`                      | End day in December       |
| `force`            | `boolean` | `false`                   | Force enable anytime      |

---

## 🎨 Examples

### Custom Text

```jsx
<ChristmasEffects text="🎅 Happy Holidays 🎅" />
```

---

### Reduce Snow

```jsx
<ChristmasEffects snowflakeCount={100} />
```

---

### Disable Firecrackers

```jsx
<ChristmasEffects fireworks={false} />
```

---

### Show Only Until Christmas Day

```jsx
<ChristmasEffects endDay={25} />
```

---

### Full Custom Example

```jsx
<ChristmasEffects
  text="🎄 Season’s Greetings 🎄"
  snowflakeCount={300}
  fireworks
  fireworkInterval={8000}
  startDay={5}
  endDay={25}
  force
/>
```

---

## 🧠 How It Works

* Uses **react-snowfall** for snow ❄️
* Uses **canvas-confetti** for fireworks 🎆
* Checks the system date
* Renders nothing outside December
* Uses `position: fixed` overlay
* Does NOT block user interactions (`pointer-events: none`)

---

## ⚛️ Framework Compatibility

| Framework | Supported            |
| --------- | -------------------- |
| React     | ✅                    |
| Vite      | ✅                    |
| CRA       | ✅                    |
| Next.js   | ✅ (client-side only) |
| Remix     | ✅ (client-side)      |

> ⚠️ For Next.js, render inside a client component.

---

## 🧩 Styling

Styles are bundled automatically.

If needed, you can override styles using CSS:

```css
.christmas-text {
  font-size: 4rem;
  color: gold;
}
```

---

## 🔒 Accessibility & Performance

✔ No event listeners attached
✔ No layout shift
✔ Lightweight canvas effects
✔ Safe for production

---

## 🐛 Troubleshooting

### Snow not visible?

* Ensure parent container has height
* Check z-index conflicts

### Firecrackers not firing?

* Must run in browser
* Not supported during SSR render

---

## 📄 License

MIT © 2025
Free to use in personal and commercial projects.

---

## 🌟 Contributing

PRs welcome!

Ideas:

* 🎆 New Year mode
* 🔊 Sound effects
* 🌙 Dark mode themes
* 🎨 Custom color themes

---

## ❤️ Support

If you like this package, please ⭐ the repo on GitHub
and share it with the community 🎄✨

---

Happy Coding & Merry Christmas! 🎅❄️🎆
