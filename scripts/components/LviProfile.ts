import LviProfileDesign from 'generated/my-components/LviProfile';
import { getCombinedStyle } from '@smartface/extension-utils/lib/getCombinedStyle';

export default class LviProfile extends LviProfileDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
    set userName(value: string) {
        this.flProfile.userName = value;
    }
    get userName(): string {
        return this.flProfile.userName;
    }
    set imageSource(value: string) {
        this.flProfile.imageSource = value;
    }

    static getHeight() {
        return getCombinedStyle('.lviProfile').height || 0;
    }
}
