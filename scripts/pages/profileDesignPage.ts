import MapView from '@smartface/native/ui/mapview';
import { User } from 'api/randomuser';
import LviUserProfile from 'components/LviUserProfile';
import ProfileDesignPageDesign from 'generated/pages/profileDesignPage';

export default class ProfileDesignPage extends ProfileDesignPageDesign {
    router: any;
    routeData: User;
	constructor() {
		super();
		// Overrides super.onShow method
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}


    initListView(){
        this.flProfile.imageSource = this.routeData.picture.medium;
        this.flProfile.lblProfile.text = this.routeData.name.title + ' ' +this.routeData.name.first + ' ' +this.routeData.name.last;
        // TODO Burasi calismiyor veya ekranda gorunmuyor.
        this.lvUserDetails.onRowBind = (item: LviUserProfile, index: number) => {
            console.log('row: '+ index+1 + ' item: '+ JSON.stringify(item));
        }
        this.lvUserDetails.onRowHeight = (index: number) => {
            console.log('onRowHeight');
            return LviUserProfile.getHeight();
        }
    }

    initMapView(){
        const centerLocation = {
            latitude: +this.routeData.location.coordinates.latitude,
            longitude: +this.routeData.location.coordinates.longitude
        };
        this.flMapView.setCenterLocationWithZoomLevel(centerLocation,11,false);
        const myPin = new MapView.Pin({
            location: centerLocation,
            title: this.routeData.name.first
        });
        this.flMapView.addPin(myPin);
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(this: ProfileDesignPage, superOnShow: () => void) {
	superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(this: ProfileDesignPage, superOnLoad: () => void) {
	superOnLoad();
    this.initListView();
    this.initMapView();
}
