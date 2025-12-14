# react-christmas-effects 🎄❄️🎆

Add Christmas snow and firecracker effects to your React app.
Automatically activates only in December.

## Install
npm install react-christmas-effects

## Usage
```jsx
import { ChristmasEffects } from "react-christmas-effects";

function App() {
  return <ChristmasEffects />;
}

| Prop             | Description         | Default         |
| ---------------- | ------------------- | --------------- |
| text             | Message text        | Merry Christmas |
| snowflakeCount   | Snow amount         | 200             |
| fireworks        | Enable firecrackers | true            |
| fireworkInterval | Interval (ms)       | 12000           |
| startDay         | Start day           | 1               |
| endDay           | End day             | 31              |
| force            | Force enable        | false           |
