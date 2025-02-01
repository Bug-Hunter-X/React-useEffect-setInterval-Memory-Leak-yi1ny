```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic for setting interval
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array causes the interval to never be cleared

  return (
    <div>Count: {count}</div>
  );
}
```