import React, {useLayoutEffect, useState} from 'react';

export function useResizeObserver(ref) {
    const [current, setCurrent] = useState(null);
    const [entries, setEntries] = useState(null);
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        const observer = new ResizeObserver((entries) => {
            setCurrent(ref.current);
            setEntries(entries);
        });
        observer.observe(ref.current);
        return () => observer.disconnect();

    }, [ref]);
    return {current, entries};
}
