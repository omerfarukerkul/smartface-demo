import FlProfileDesign from 'generated/my-components/FlProfile';

export default class FlProfile extends FlProfileDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
    set userName(value: string){
        this.lblProfile.text = value;
    }
    get userName() : string {
        return this.lblProfile.text;
    }
    set imageSource(value: string){
        this.imgProfile.loadFromUrl({
            url: value
        });
    }

}
