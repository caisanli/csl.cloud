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
    component: require('@views/main/index.tsx').default
}];

export default routes;