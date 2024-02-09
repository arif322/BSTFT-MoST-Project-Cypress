import open_Url from '../BaseDriver/baseDriver'
import login_Page from '../pages/loginPages/loginPage'
import apply_page from '../pages/BSTFTPages/BSTFTpage'
import applicantInfo from '../pages/ApplyPage/PrimaryInformation/BasicInformation'
import picture from '../pages/ApplyPage/PrimaryInformation/picture_upload'
import birth_date from '../pages/ApplyPage/PrimaryInformation/Birthdayselect'
import applicant_exp from '../pages/ApplyPage/ApplicantExperiences/ApplicantExp'
import contact_info from '../pages/ApplyPage/ApplicantExperiences/contactInfo'

describe('BSTFT MoST Project', ()=>{
    const openUrl = new open_Url()
    const loginPage = new login_Page()
    const apply = new apply_page()
    const picture_upload = new picture()
    const birthdate = new birth_date()
    const Applicant_Info = new applicantInfo() 
    const app_epx = new applicant_exp()
    const cont_info = new contact_info()

    it('Login check', ()=>{
        openUrl.openUrl()
        loginPage.loginProcess()
        apply.applyProcess()
        
        picture_upload.pictureUpload()
        birthdate.birthdate()
        Applicant_Info.Applicant_Info()
        app_epx.appexp()
        cont_info.contactInfo()
        
    })
    
})