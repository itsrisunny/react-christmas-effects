# 🎄 react-christmas-effects ❄️🎆

Add **elegant Christmas snowfall**, **one-time greeting text**, and a **single firecracker burst** to your React app — automatically shown **only in December**.

Built with **Framer Motion** for smooth, accessible animations.

✔ Lightweight
✔ Elegant (no noisy animations)
✔ December-only by default
✔ Text & firecracker shown **once**
✔ Works with Vite, CRA, Next.js (client-side)

---

## ✨ Demo

❄️ Snow falling continuously
🎄 Greeting text fades in once
🎆 Firecracker bursts once

> Automatically active from **December 1st → December 31st**

---

## 📦 Installation

```bash
npm install react-christmas-effects
```

or

```bash
yarn add react-christmas-effects
```

or

```bash
pnpm add react-christmas-effects
```

---

## 🎨 IMPORTANT: Import CSS

You **must import the bundled CSS** once in your app:

```js
import "react-christmas-effects/dist/index.css";
```

This is required for layout and styling.

---

## 🚀 Basic Usage

```jsx
import { ChristmasEffects } from "react-christmas-effects";
import "react-christmas-effects/dist/index.css";

function App() {
  return <ChristmasEffects />;
}

export default App;
```

That’s it 🎉
Your app will now show Christmas effects **only in December**.

---

## 🧪 Force Enable (for testing)

To preview effects outside December:

```jsx
<ChristmasEffects force />
```

---

## 🎛️ Props API

### `<ChristmasEffects />`

| Prop             | Type      | Default                   | Description                             |
| ---------------- | --------- | ------------------------- | --------------------------------------- |
| `text`           | `string`  | `"🎄 Merry Christmas 🎄"` | Greeting text shown once                |
| `snowflakeCount` | `number`  | `200`                     | Number of falling snowflakes            |
| `showText`       | `boolean` | `true`                    | Show / hide greeting text               |
| `fireworks`      | `boolean` | `true`                    | Enable one-time firecracker burst       |
| `startDay`       | `number`  | `1`                       | Start day in December                   |
| `endDay`         | `number`  | `31`                      | End day in December                     |
| `force`          | `boolean` | `false`                   | Force enable regardless of current date |

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

### Minimal Setup (Snow Only)

```jsx
<ChristmasEffects showText={false} fireworks={false} />
```

---

## 🧠 How It Works

* Uses **react-snowfall** for snow ❄️
* Uses **canvas-confetti** for firecracker 🎆
* Uses **Framer Motion** for smooth text animation
* Text & firecracker run **only once per page load**
* Snow runs continuously
* Automatically disables outside December
* Uses `position: fixed` overlay
* Does **not block user interaction** (`pointer-events: none`)

---

## ⚛️ Framework Compatibility

| Framework | Supported            |
| --------- | -------------------- |
| React     | ✅                    |
| Vite      | ✅                    |
| CRA       | ✅                    |
| Next.js   | ✅ (client-side only) |
| Remix     | ✅ (client-side)      |

> ⚠️ For Next.js, render inside a **client component**.

---

## ♿ Accessibility & Performance

✔ Respects `prefers-reduced-motion`
✔ No event listeners on DOM
✔ No layout shift
✔ Lightweight canvas effects
✔ Safe for production use

---

## 🐛 Troubleshooting

### Effects not visible?

* Ensure CSS is imported:

  ```js
  import "react-christmas-effects/dist/index.css";
  ```
* Check z-index conflicts
* Ensure component renders on client side

### Firecracker not firing?

* Runs only in browser (not SSR)
* Fires **only once per page load**

---

## 📄 License

MIT © 2025
Free to use in personal and commercial projects.

---

## 🌟 Contributing

PRs are welcome!

Ideas:

* 🎆 New Year mode
* 🔊 Optional sound effects
* 🎨 Theme customization
* 🌙 Dark mode variants

---

## ❤️ Support

If you like this package, please ⭐ the GitHub repo
and share it with the community 🎄✨

---

**Happy Coding & Merry Christmas! 🎅❄️🎆**
