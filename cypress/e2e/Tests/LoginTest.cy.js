import open_Url from '../BaseDriver/baseDriver'
import login_Page from '../pages/loginPages/loginPage'
import apply_page from '../pages/BSTFTPages/BSTFTpage'
import applicantInfo from '../pages/ApplyPage/PrimaryInformation/BasicInformation'

describe('BSTFT MoST Project', ()=>{
    const openUrl = new open_Url()
    const loginPage = new login_Page()
    const apply = new apply_page()
    const Applicant_Info = new applicantInfo() 

    it('Login check', ()=>{
        openUrl.openUrl()
        loginPage.loginProcess()
        apply.applyProcess()
        Applicant_Info.Applicant_Info()
    })
    
})