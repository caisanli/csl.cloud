import { RouteConfig } from 'react-router-config';

const routes:RouteConfig[] = [{
    // key?: React.Key;
    // location?: Location;
    // component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType;
    // path?: string | string[];
    // exact?: boolean;
    // strict?: boolean;
    // routes?: RouteConfig[];
    // render?: (props: RouteConfigComponentProps<any>) => React.ReactNode;
    // [propName: string]: any;
    path: '/',
    exact: true,
    component: require('@views/main').default
}, {
    path: '/login',
    exact: true,
    component: require('@views/login').default
}, {
    path: '*',
    component: require('@views/404').default
}];

export default routes;