```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using count in a setInterval callback without a dependency array
    const intervalId = setInterval(() => {
      console.log('Count:', count); 
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Missing dependency: count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```