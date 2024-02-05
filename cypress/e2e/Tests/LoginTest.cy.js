import open_Url from '../BaseDriver/baseDriver'
import login_Page from '../pages/loginPages/loginPage'

describe('BSTFT MoST Project', ()=>{
    const openUrl = new open_Url()
    const loginPage = new login_Page()

    it('Login check', ()=>{
        openUrl.openUrl()
        loginPage.loginProcess()
    })
    
})