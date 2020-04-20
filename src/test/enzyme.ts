import * as React from 'react';
import { mount as enzymeMount, shallow as enzymeShallow } from 'enzyme';
import { Provider } from '../components/providers/Provider';

const mockOptions = {
    wrappingComponent: Provider,
};

export const mount: typeof enzymeMount = (node: React.ReactElement) =>
    enzymeMount(node, mockOptions);

export const shallow: typeof enzymeShallow = (node: React.ReactElement) =>
    enzymeShallow(node, mockOptions);
