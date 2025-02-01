```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]); // Add count to the dependency array

  return (
    <div>Count: {count}</div>
  );
}
```