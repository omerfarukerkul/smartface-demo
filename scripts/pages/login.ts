import Button from '@smartface/native/ui/button';
import * as ReqResService from 'api/reqres';
import LoginDesign from 'generated/pages/login';

export default class Login extends LoginDesign {
    router: any;
	constructor() {
		super();
		// Overrides super.onShow method
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}

    async loginService(){
        const result = await ReqResService.login({
            email: this.mbUserName.materialTextBox.text,
            password: this.mbPassword.materialTextBox.text
        });
        return result;
    }

    initMaterialTextBox(){
        this.mbUserName.options = {
            hint: "UserName",
            text: "eve.holt@reqres.in"
        };

        this.mbPassword.options = {
            hint: 'Password',
            text: 'cityslicka'
        };
        this.mbPassword.materialTextBox.isPassword = true;
    }

    initButton(){
        this.btnLogin.on(Button.Events.Press, async () => {
            await this.loginService();
            this.router.push('page2');
        });
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(this: Login, superOnShow: () => void) {
	superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(this: Login, superOnLoad: () => void) {
	superOnLoad();
    this.initMaterialTextBox();
    this.initButton();
}
