import { useDispatch } from 'react-redux';
import { setSidebarWidth } from '../../../../store/userData/userData';
import * as React from 'react';
import * as _ from 'lodash/fp';

export const useResizeListeners = () => {
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = React.useState(innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWindowWidth(innerWidth);

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    })

    const handleResize = React.useCallback(_.throttle(
        30,
        ({ clientX }: MouseEvent) => {
            const sidebarWidth = windowWidth - clientX;

            dispatch(setSidebarWidth(sidebarWidth));
        },
    ), [dispatch, windowWidth]);

    const onMouseDown: React.MouseEventHandler = React.useCallback(() => {
        document.body.style.cursor = 'ew-resize';
        document.addEventListener('mousemove', handleResize);
    }, [handleResize]);

    const onMouseUp: React.MouseEventHandler = React.useCallback(() => {
        document.body.style.cursor = 'auto';
        document.removeEventListener('mousemove', handleResize);
    }, [handleResize]);

    return {
        onMouseDown,
        onMouseUp,
    }
}
