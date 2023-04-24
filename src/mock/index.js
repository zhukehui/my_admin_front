import Mock from 'mockjs'
import {disableEmployee, saveEmployeeUpdates,downloadTemplate,importEmployees,exportEmployees,createWorkingExperience,deleteWorkingExperience,loadWorkingExperiences,
  getNewHiredEmployees,saveNewHiredUpdates,moveToOnBoard,moveToBlacklist,createNewHired,
  getInterns,updateInternToFullTime,createNewIntern,
  getDimissions,dimissionReEntry,
  getEmployBlackList} from './response/process'

Mock.mock("/staffManage/disableEmployee", "post", disableEmployee);
Mock.mock("/staffManage/saveEmployeeUpdates", "post", saveEmployeeUpdates);
Mock.mock("/staffManage/downloadTemplate", "post", downloadTemplate);
Mock.mock("/staffManage/importEmployees", "post", importEmployees);
Mock.mock("/staffManage/exportEmployees", "post", exportEmployees);
Mock.mock("/staffManage/createWorkingExperience", "post", createWorkingExperience);
Mock.mock("/staffManage/deleteWorkingExperience", "post", deleteWorkingExperience);
Mock.mock("/staffManage/loadWorkingExperiences", "post", loadWorkingExperiences);

Mock.mock("/staffManage/getNewHiredEmployees", "post", getNewHiredEmployees);
Mock.mock("/staffManage/saveNewHiredUpdates", "post", saveNewHiredUpdates);
Mock.mock("/staffManage/moveToOnBoard", "post", moveToOnBoard);
Mock.mock("/staffManage/moveToBlacklist", "post", moveToBlacklist);
Mock.mock("/staffManage/createNewHired", "post", createNewHired);

Mock.mock("/staffManage/getInterns", "post", getInterns);
Mock.mock("/staffManage/createNewIntern", "post", createNewIntern);
Mock.mock("/staffManage/updateInternToFullTime", "post", updateInternToFullTime);

Mock.mock("/staffManage/getDimissions", "post", getDimissions);
Mock.mock("/staffManage/dimissionReEntry", "post", dimissionReEntry);

Mock.mock("/staffManage/getEmployBlackList", "post", getEmployBlackList);

export default Mock
