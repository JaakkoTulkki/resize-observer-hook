import React, {useLayoutEffect, useState} from 'react';

export function useResizeObserver(ref) {
    const [observation, setObservation] = useState({current: null, entries: null});
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        const observer = new ResizeObserver((entries) => {
            const o = {
                current: ref.current,
                entries,
            }
            setObservation(o);
        });
        observer.observe(ref.current);
        return () => observer.disconnect();

    }, [ref]);
    return observation;
}
