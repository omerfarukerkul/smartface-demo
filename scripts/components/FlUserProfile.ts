import FlUserProfileDesign from 'generated/my-components/FlUserProfile';

export default class FlUserProfile extends FlUserProfileDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
}
