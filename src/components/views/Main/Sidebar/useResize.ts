import { useDispatch, useSelector } from 'react-redux';
import { setSidebarWidth } from '../../../../store/userData/userData';
import * as React from 'react';
import * as _ from 'lodash/fp';
import { sidebarWidthSelector } from '../../../../store/userData/selectors';

export const useResize = () => {
    const dispatch = useDispatch();
    const currentSidebarWidth = useSelector(sidebarWidthSelector);
    const [windowWidth, setWindowWidth] = React.useState(innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(innerWidth);
            const maxSidebarWidth = innerWidth / 2;
            if (currentSidebarWidth > maxSidebarWidth) {
                dispatch(setSidebarWidth(maxSidebarWidth));
            }
        }

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    })

    const handleResize = React.useCallback(_.throttle(
        30,
        ({ clientX }: MouseEvent) => {
            const sidebarWidth = windowWidth - clientX;
            if (sidebarWidth <= windowWidth / 2) {
                dispatch(setSidebarWidth(sidebarWidth));
            }
        },
    ), [dispatch, windowWidth]);

    const onMouseDown = React.useCallback(() => {
        const onMouseUp = () => {
            document.body.style.cursor = 'auto';
            document.removeEventListener('mousemove', handleResize);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.body.style.cursor = 'ew-resize';
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', onMouseUp);
    }, [handleResize]);

    return {
        onMouseDown,
    }
}
