import ScrollView1Design from 'generated/my-components/ScrollView1';

export default class ScrollView1 extends ScrollView1Design {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
}
