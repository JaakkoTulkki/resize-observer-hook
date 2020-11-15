import React, {useLayoutEffect, useState, useRef} from 'react';
import ResizeObserver from 'resize-observer-polyfill';


function useOffsetWidth(ref) {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        if (!ref.current) {
            console.log('hi t')
            return;
        }
        const observer = new ResizeObserver((entries) => {
            console.log('in resize', entries)
            setWidth(ref.current.offsetWidth);
        });
        observer.observe(ref.current);
        return () => {
            console.log('removing');
            return observer.disconnect();
        }
    }, [ref]);
    return width;
}

export function Hello() {
    const ref = useRef(null);
    const width = useOffsetWidth(ref);
    return <div>
        <div ref={ref} style={{width: '50px'}}>Target</div>
        <div data-testid="offsetWidth">58</div>
    </div>;
}