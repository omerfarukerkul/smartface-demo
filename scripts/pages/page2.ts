import Page2Design from 'generated/pages/page2';
import LviProfile from 'components/LviProfile';
import * as RandomUserService from "api/randomuser";
import PageTitleLayout from 'components/PageTitleLayout';
import componentContextPatch from '@smartface/contx/lib/smartface/componentContextPatch';
import System from '@smartface/native/device/system';

type AsyncReturnType<T extends (...args: any) => any> = 
    T extends (...args: any) => Promise<infer U> ? U : 
    T extends (...args: any) => infer U ? U : any


export default class Page2 extends Page2Design {
    router: any;
    routeData: any;
    parentController: any;
    dataList: AsyncReturnType<typeof RandomUserService.getUsers>['results'] = [];
    constructor() {
        super();
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    }

    initListView() {
        this.lvMain.onRowHeight = (index: number) => {
            return LviProfile.getHeight();
        }

        this.lvMain.onRowBind = (item: LviProfile, index: number) => {
            item.userName = this.dataList[index]?.name.first || '';
            item.imageSource = this.dataList[index].picture.large;
            item.onTouchEnded = () => {
                this.router.push('/pages/ProfilePage', { routeData: this.dataList[index]});
            };
        };
        this.lvMain.onPullRefresh = () => {
            //this.refreshListView();
            this.lvMain.stopRefresh();
        };
    }

    refreshListView() {
        this.lvMain.itemCount = this.dataList.length;
        this.lvMain.refreshData();
    }

    async serviceCall() {
        const result = await RandomUserService.getUsers(10);
        this.dataList = result.results;
        this.refreshListView();
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(this: Page2, superOnShow: () => void) {
    superOnShow();
    this.headerBar.titleLayout.applyLayout();
    this.serviceCall();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(this: Page2, superOnLoad: () => void) {
    superOnLoad();
    this.initListView();
    this.headerBar.leftItemEnabled = true;
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, 'titleLayout');
    if (System.OS === 'Android') {
        this.headerBar.title = '';
    }
}
