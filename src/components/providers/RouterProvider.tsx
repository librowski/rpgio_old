import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterProvider: React.FC = ({ children }) => (
    <BrowserRouter>{ children }</BrowserRouter>
);
