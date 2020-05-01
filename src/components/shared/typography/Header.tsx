import * as React from 'react';
import { Text } from './Text';
import styled from 'styled-components';

const presetProps: React.ComponentProps<typeof Text> = {
    weight: 'medium',
    size: 'xl',
}

export const Header = styled(
    ({ ...props }) => <Text {...presetProps} {...props} />)
`
    margin-bottom: 16px;
`;

