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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toMock = <T extends (...args: any[]) => any>(fn: T) =>
    fn as jest.MockedFunction<T>;
