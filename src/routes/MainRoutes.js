import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Espace_candidat from 'views/espace_candidat';
import Espace_entreprise from 'views/vue_entreprise_offre';
import Espace_recruteur from 'views/espace_recruteur';
import Entreprise_profileCandidat from 'views/vue_entreprise_profileCandidat';
import Entreprise_offre from 'views/vue_entreprise_offre';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/vue_entreprise_offre')));

// PageAcceill routing
const PageAcceill = Loadable(lazy(() => import('views/espace_candidat')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'espace_candidat',
            element: <Espace_candidat />
        },
        {
            path: 'vue_entreprise_offre',
            element: <Entreprise_offre />
        },
        {
            path: 'vue_entreprise_profileCandidat',
            element: <Entreprise_profileCandidat />
        },
        {
            path: 'espace_recruteur',
            element: <Espace_recruteur />
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        }
    ]
};

export default MainRoutes;
