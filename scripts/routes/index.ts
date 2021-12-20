import buildExtender from '@smartface/extension-utils/lib/router/buildExtender';
import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
} from '@smartface/router';
import * as Pages from 'pages';
import '@smartface/extension-utils/lib/router/goBack'; // Implements onBackButtonPressed
import BackClose from '@smartface/extension-utils/lib/router/back-close'
import { matchUrl } from '@smartface/router/lib/common/matchPath';

BackClose.dismissBuilder = (match, routeData, router, pageInstance, pageProps, route) => {
    if(match.url == '/pages/login/main'){
        return {text: '', position: BackClose.DismissPosition.RIGHT }
    }
    return { text: global.lang.done, position: BackClose.DismissPosition.RIGHT, }
}

const router = Router.of({
    path: '/',
    isRoot: true,
    routes: [
        StackRouter.of({
            path: '/pages',
            routes: [
                Route.of({
                    path: '/pages/page1',
                    build: buildExtender({
                        getPageClass: () => Pages.Page1,
                        headerBarStyle: { visible: true },
                    }),
                }),
                Route.of({
                    path: '/pages/page2',
                    build: buildExtender({
                        getPageClass: () => Pages.Page2,
                        headerBarStyle: { visible: true },
                    }),
                }),
                Route.of({
                    path: '/pages/ProfileDesignPage',
                    build: buildExtender({
                        getPageClass: () => Pages.ProfileDesignPage,
                        headerBarStyle: { visible: true },
                    }),
                }),
                StackRouter.of({
                    path: '/pages/login',
                    to: '/pages/login/main',
                    modal: true,
                    routes: [
                        Route.of({
                            path: '/pages/login/main',
                            build: buildExtender({
                                getPageClass: () => Pages.Login,
                                headerBarStyle: { visible: true },
                            }),
                        }),
                    ]
                })
                
            ],
        }),
    ],
});

export default router;
