import { useEffect } from "react";
import { marked } from "marked";

import MarkdownPreview from "./MarkdownPreview";
import markdownContent from "./markdownContent";

export default function App() {
  const [text, setText] = useState(markdownContent);
  const [time, setTime] = useState(Date.now());
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime.Date.now();
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  const options = { text, theme };
  const render = (text) => marked.parse(text);

  return (
    <div>
      <h1>Perf with React</h1>
      <h2>Current time: {time}</h2>
      <label htmlFor="theme">
        Choose a theme
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="green">Green</option>
          <option value="red">red</option>
          <option value="peru">peru</option>
          <option value="yellow">yellow</option>
        </select>
      </label>
      <div className="markdown">
        <textarea
          className="markdown-editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <MarkdownPreview options={options} render={render} />
      </div>
    </div>
  );
}
