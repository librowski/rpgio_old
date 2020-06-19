import { useDispatch, useSelector } from 'react-redux';
import {
    setResizing,
    setSidebarWidth
} from '../../../../store/userData/userData';
import * as React from 'react';
import * as _ from 'lodash/fp';
import { useTheme } from 'styled-components';
import { uiDataSelector } from '../../../../store/userData/selectors';

export const useResize = () => {
    const dispatch = useDispatch();
    const { sizes: { sidebarMinWidth } } = useTheme();
    const { sidebarWidth: currentSidebarWidth } = useSelector(uiDataSelector);
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

    const handleResize = React.useCallback(({ clientX }: MouseEvent) => {
        const newSidebarWidth = windowWidth - clientX;
        const halfWindowWidth = windowWidth / 2;

        if (_.inRange(sidebarMinWidth, halfWindowWidth, newSidebarWidth)) {
            dispatch(setSidebarWidth(newSidebarWidth));
        } else if (newSidebarWidth > halfWindowWidth) {
            dispatch(setSidebarWidth(halfWindowWidth));
        }
    }, [sidebarMinWidth, dispatch, windowWidth]);

    const onMouseDown = React.useCallback(() => {
        const onMouseUp = () => {
            dispatch(setResizing(false));
            document.removeEventListener('mousemove', handleResize);
            document.removeEventListener('mouseup', onMouseUp);
        };

        dispatch(setResizing(true));
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', onMouseUp);
    }, [handleResize, dispatch]);

    return {
        onMouseDown,
    }
}
