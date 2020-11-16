# ResizeObserver Hook for React

The purpose of the hook is to make using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
simpler  with React.

## Install

`npm install --save simple-resize-observer-hook`

## API

```ecmascript 6
function MyComponent() {
    const ref = useRef(null);
    // current is the ref object.
    // entries is an array of ResizeObserverEntry objects.
    const {current, entries} = useResizeObserver(ref);
    const [width, setWidth] = useState(10);
    const offsetWidth = current ? current.offsetWidth : 0;
    console.log(offsetWidth, entries)
    return <>
        <input style={{width: `${width}px`}} type="text" value="This is being observed" ref={ref}/>
        <br/>
        <button onClick={() => setWidth(width + 10)}>Add Width</button>
        <p>The offsetWidth is {offsetWidth}</p>
    </>
}
```

You need to pass a ref object as an argument to the hook. The ref is the object that is being observed.

The hook returns an object that has two properties:

### current
The React ref object.

### entries
An array of [ResizeObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects.