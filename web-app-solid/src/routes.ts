import {lazy} from 'solid-js';
import type {RouteDefinition} from '@solidjs/router';
import Home from "./pages/home";

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/competencies',
        component: lazy(() => import('./pages/competencies')),
    },
    {
        path: '/projects',
        component: lazy(() => import('./pages/projects')),
    },
    {
        path: '**',
        component: lazy(() => import('./errors/404')),
    },
];
