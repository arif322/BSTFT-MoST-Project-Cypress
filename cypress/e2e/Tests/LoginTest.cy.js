import open_Url from '../BaseDriver/baseDriver'
import login_Page from '../pages/loginPages/loginPage'
import apply_page from '../pages/BSTFTPages/BSTFTpage'
import applicantInfo from '../pages/ApplyPage/PrimaryInformation/BasicInformation'
import picture from '../pages/ApplyPage/PrimaryInformation/picture_upload'
import birth_date from '../pages/ApplyPage/PrimaryInformation/Birthdayselect'
import applicant_exp from '../pages/ApplyPage/ApplicantExperiences/ApplicantExp'
import contact_info from '../pages/ApplyPage/ApplicantExperiences/contactInfo'
import education_info_SSC from '../pages/ApplyPage/EducationalQualification/EduQualification'
import education_info_HSC from '../pages/ApplyPage/EducationalQualification/eduquali_HSC'
import education_info_BSc from '../pages/ApplyPage/EducationalQualification/eduquali_BSc'
import education_info_MSc from '../pages/ApplyPage/EducationalQualification/eduquali_MSc'
import saveButton_first_step from '../pages/saveButton/saveButton'
import training_any from '../pages/ApplyPage/ExpTrainingInfo/AppTraing'
import experience_any from '../pages/ApplyPage/ExpTrainingInfo/PreviuosExp'


describe('BSTFT MoST Project', ()=>{
    const openUrl = new open_Url()
    const loginPage = new login_Page()
    const apply = new apply_page()
    const picture_upload = new picture()
    const birthdate = new birth_date()
    const Applicant_Info = new applicantInfo() 
    const app_epx = new applicant_exp()
    const cont_info = new contact_info()
    const edu_info_SSC = new education_info_SSC()
    const edu_info_HSC = new education_info_HSC()
    const edu_info_BSc = new education_info_BSc()
    const edu_info_MSc = new education_info_MSc()
    const save_1st_step = new saveButton_first_step()
    const save_2nd_step = new saveButton_first_step()
    const trainingInfo = new training_any()
    const experienceInfo = new experience_any()
 
    it('Login check', ()=>{
        openUrl.openUrl()
        loginPage.loginProcess()
        apply.applyProcess()
        picture_upload.pictureUpload()
        birthdate.birthdate()
        Applicant_Info.Applicant_Info()
        app_epx.appexp()
        cont_info.contactInfo()
        edu_info_SSC.addeducation_SSC()
        edu_info_HSC.addeducation_HSC()
        edu_info_BSc.addeducation_BSc()
        edu_info_MSc.addeducation_MSc()
        save_1st_step.savebutton()
        
        

    });
    
    it('Second step Applicant Experience', ()=>{
        cy.log('Starting second step: Applicant Experience');
        trainingInfo.trainInfomation()
        cy.log('Training information added successfully');
        // experienceInfo.PrevtrainInfomation()
        save_2nd_step.savebutton()
        cy.log('Second step saved successfully');
    });
});