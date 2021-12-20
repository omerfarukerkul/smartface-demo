import { getCombinedStyle } from '@smartface/extension-utils/lib/getCombinedStyle';
import LviUserProfileDesign from 'generated/my-components/LviUserProfile';

export default class LviUserProfile extends LviUserProfileDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}

    set textField(value: string) {
        this.flUserProfile.flUserLabel.text = value;
    }

    get textField(): string {
        return this.flUserProfile.flUserLabel.text;
    }

    static getHeight() {
        return getCombinedStyle('.lviUserProfile').height || 0;
    }

}
