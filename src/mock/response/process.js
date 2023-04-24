import Mock from 'mockjs'
import moment from 'moment'

export const getEmployBlackList = (params) => {
  console.info('getEmployBlackList:'+JSON.stringify(params));
  const employeeBlackList = {
    data: [{
      employeeNo: 10,
      employeeName: '张三',
      level1Dept: '智能投资',
      phoneNumber: '13200020202',
      onBoardDate: '2016-12-10',
      blockReason: '临时改变主意，拒绝offer'
    },{
      employeeNo: 12,
      employeeName: '李四',
      level1Dept: '财务部',
      phoneNumber: '13200020202',
      onBoardDate: '2016-12-10',
      blockReason: '拒绝接听电话'
    },{
      employeeNo: 13,
      employeeName: '雅力士',
      level1Dept: '产品部',
      phoneNumber: '13200020202',
      onBoardDate: '2019-06-10',
      blockReason: ''
    }],
    total: 39
  }
  return Mock.mock(employeeBlackList)
}

export const getDimissions = (params) => {
  console.info('getDimissions:'+JSON.stringify(params));
  const dimissions = {
    data: [{
      employeeNo: 'A001', employeeName: '张三',
      businessUnit: '产品',
      level1Dept: '智能投资',
      level2Dept: '一组',
      team: '',
      oaPostName: '',
      employeeId: 'EA002050050',
      passportNo: '302144040030205005202',
      birthday: '2000/01/01',
      gender: '女',
      age: '20',
      nation: '汉',
      marriageStatus: '未婚',
      birthStatus: '未',
      mobilePhoneNumber: '13200020202',
      privateEmail: 'lisi@qq.com'
    },
      {
        employeeNo: 'A001', employeeName: '李四',
        businessUnit: '产品',
        level1Dept: '智能投资',
        level2Dept: '一组',
        team: '',
        oaPostName: '',
        employeeId: 'EA002050050',
        passportNo: '302144040030205005202',
        birthday: '2000/01/01',
        gender: '女',
        age: '20',
        nation: '汉',
        marriageStatus: '未婚',
        birthStatus: '未',
        mobilePhoneNumber: '13200020202',
        privateEmail: 'lisi@qq.com'
      },
      {
        employeeNo: 'A001', employeeName: '王五',
        businessUnit: '产品',
        level1Dept: '智能投资',
        level2Dept: '一组',
        team: '',
        oaPostName: '',
        employeeId: 'EA002050050',
        passportNo: '302144040030205005202',
        birthday: '2000/01/01',
        gender: '女',
        age: '20',
        nation: '汉',
        marriageStatus: '未婚',
        birthStatus: '未',
        mobilePhoneNumber: '13200020202',
        privateEmail: 'lisi@qq.com'
      }
    ],
    total: 128
  }
  return Mock.mock(dimissions)
}

export const dimissionReEntry = (updateForm) => {
  console.info('dimissionReEntry:' + JSON.stringify(updateForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const getInterns = (params) => {
  console.info('getInterns:' + JSON.stringify(params));
  const interns = {
    data: [{
      internId: 10,
      employeeName: '张三',
      foreignName: 'Jason',
      employeeId: '123333333',
      gender: '男',
      phoneNumber: '13200020202',
      privateEmail: '13200020202@qq.com',
      internDept: '智能投资',
      highestEducationSchool: '智能投资',
      highestDegree: '智能投资',
      highestEducationMajor: '智能投资',
      internSalary: 100,
      supervisor: '鲁宾',
      registeredDate: '2016-12-10',
      internEndDate: '2016-12-10',
      isFullTime: '否'
    },
      {
        internId: 11,
        employeeName: '李四',
        foreignName: 'lisi',
        employeeId: '123333333',
        gender: '男',
        phoneNumber: '13200020202',
        privateEmail: '13200020202@qq.com',
        internDept: '智能投资',
        highestEducationSchool: '智能投资',
        highestDegree: '智能投资',
        highestEducationMajor: '智能投资',
        internSalary: 100,
        supervisor: '鲁宾',
        registeredDate: '2016-12-10',
        internEndDate: '2016-12-10',
        isFullTime: '是'
      }, {
        internId: 12,
        employeeName: '王五',
        foreignName: 'Lana',
        employeeId: '123333333',
        gender: '女',
        phoneNumber: '13200020202',
        privateEmail: '13200020202@qq.com',
        internDept: '智能投资',
        highestEducationSchool: '智能投资',
        highestDegree: '智能投资',
        highestEducationMajor: '智能投资',
        internSalary: 100,
        supervisor: '鲁宾',
        registeredDate: '2016-12-10',
        internEndDate: '2016-12-10',
        isFullTime: '否'
      }],
    total: 26
  }
  return Mock.mock(interns)
}

export const createNewIntern = (createForm) => {
  console.info('createNewIntern:' + JSON.stringify(createForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}
export const updateInternToFullTime = (updateForm) => {
  console.info('updateInternToFullTime:' + JSON.stringify(updateForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const getNewHiredEmployees = (params) => {
  console.info(JSON.stringify(params));
  const newHiredEmployees = {
    data: [{
      newHiredEmployeeId: 10,
      employeeName: '张三',
      level1Dept: '智能投资',
      businessUnit: '产品',
      isIntern: 'NO',
      phoneNumber: '13200020202',
      onBoardDate: '2016-12-10'
    }, {
      newHiredEmployeeId: 11,
      employeeName: '李四',
      level1Dept: '智能投资',
      isIntern: 'NO',
      businessUnit: '产品',
      phoneNumber: '13200020202',
      onBoardDate: '2016-12-10'
    },
      {
        newHiredEmployeeId: 12,
        employeeName: '王五',
        level1Dept: '智能投资',
        isIntern: 'NO',
        businessUnit: '产品',
        phoneNumber: '13200020202',
        onBoardDate: '2016-12-10'
      },
      {
        newHiredEmployeeId: 13,
        employeeName: '赵六',
        level1Dept: '智能投资',
        isIntern: 'NO',
        businessUnit: '产品',
        phoneNumber: '13200020202',
        onBoardDate: '2016-12-10'
      },
      {
        newHiredEmployeeId: 14,
        employeeName: '孙七',
        level1Dept: '智能投资',
        isIntern: 'YES',
        businessUnit: '产品',
        phoneNumber: '13200020202',
        onBoardDate: '2016-12-10'
      }
    ],
    total: 53
  }
  return Mock.mock(newHiredEmployees)
}

export const saveNewHiredUpdates = (updateForm) => {
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const moveToOnBoard = (updateForm) => {
  console.info('moveToOnBoard:' + JSON.stringify(updateForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}
export const createNewHired = (createNewHiredForm) => {
  console.info('createNewHiredForm:' + JSON.stringify(createNewHiredForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const moveToBlacklist = (updateForm) => {
  console.info('moveToBlacklist:' + JSON.stringify(updateForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const getEmployeeProfiles = (params) => {
  console.info('getEmployeeProfiles:' + JSON.stringify(params));
  const employeeProfiles = {
    data: [{
      employeeNo: "A001",
      employeeName: "张三",
      businessUnit: "产品",
      level1Dept: "智能投资",
      level2Dept: "一组",
      team: "三体小分队",
      oaPostName: "",
      employeeId: "302144040030205005202",
      passportNo: "EA002050050",
      birthday: moment("1992-12-25").toDate(),
      gender: "女",
      age: "20",
      nation: "汉",
      marriageStatus: "未婚",
      birthStatus: "未",
      mobilePhoneNumber: "13200020202",
      privateEmail: "lisi@qq.com",
      politicalStatus: "politicalStatus",
      joinPartyDate: moment("2018-12-25").toDate(),
      communistPartyLocation: "communistPartyLocation",
      registeredParty: "registeredParty",
      probationaryPartyMember: "politicalStatus",
      jobInParty: "jobInParty",
      joinPartyType: "joinPartyType",
      partyTurnOverDate: moment("2010-12-25").toDate(),
      recommendationReceivedDate: moment("2010-12-25").toDate(),
      recommendationCommitDate: moment("2010-12-25").toDate(),
      recommendationExpiredDate: moment("2010-12-25").toDate(),
      partyBranch: "partyBranch",
      transferDate: moment("1992-12-25").toDate(),
      highestEducation: "highestEducation",
      highestEducationSchoolAddress: "highestEducationSchoolAddress",
      highestEducationSchool: "highestEducationSchool",
      highestEducationMajor: "highestEducationMajor",
      highestDegree: "highestDegree",
      highestDegreeSchool: "highestDegreeSchool",
      highestDegreeMajor1: "highestDegreeMajor1",
      doctorDegreeSchool: "doctorDegreeSchool",
      doctorDegreeMajor: "doctorDegreeMajor",
      masterDegreeSchool: "masterDegreeSchool",
      masterDegreeMajor: "masterDegreeMajor",
      bachelorDegreeSchool: "bachelorDegreeSchool",
      bachelorDegreeMajor: "bachelorDegreeMajor",
      overseaStudent: "overseaStudent",
      previousCompanyName:'阿里巴巴',
      previousCompanyPost:'软件工程师',
      workingAbroad:'YES',
      workingExperiences:[{
        employeeNo: 101,
        workingExperienceId:1,
        companyName: "华为",
        companyPost: "软件工程师",
        workingAbroad: "NO",
      },{
        employeeNo: 201,
        workingExperienceId:2,
        companyName: "腾讯",
        companyPost: "软件工程师",
        workingAbroad: "NO",
      },{
        employeeNo: 301,
        workingExperienceId:3,
        companyName: "阿里巴巴",
        companyPost: "软件工程师",
        workingAbroad: "YES",
      }],
      hireApproach: "hireApproach",
      isIntern: "isIntern",
      onBoardDate: moment("2010-12-25").toDate(),
      examinationPeriodMonths: 20,
      conversionDate: moment("2016-12-25").toDate(),
      offerLetter: "offerLetter",
      offerDepartment: "offerDepartment",
      offerPosition: "offerPosition",
      offerTitle: "offerTitle",
      currentTitle: "currentTitle",
      currentPost: "currentPost",
      companyEmail: "companyEmail",
      providentFundAccount: "providentFundAccount",
      additionalPFAccount: "additionalPFAccount",
      bankName: "bankName",
      bankCardNumber: "bankCardNumber",
      startWorkingDate: moment("2010-12-25").toDate(),
      employmentLength: 62,
      annualLeaveDays: 10,
      annualLeaveStartDate: moment("2018-12-25").toDate(),
      upaWorkingMonths: 30,
      totalWorkingYears: 8,
      dimissionDate: moment("2018-12-25").toDate(),
      dimissionReason: "dimissionReason",
      nextCareer: "ICBC",
      employeeStatus: "employeeStatus",
      urgentContactPerson: "urgentContactPerson",
      relationship: "relationship",
      contactNumber: "contactNumber",
      livingAddress: "livingAddress",
      hukouAddress: "hukouAddress",
      hukouCategory: "hukouCategory",
      homeplace: "homeplace",
      contractNo: "contractNo",
      signTimes: 2,
      signYears: 2,
      contractFrom: moment("2016-12-25").toDate(),
      contractEndDate: moment("2017-10-15").toDate(),
      contractStatus: "contractStatus",
      holdCertificate: "holdCertificate",
      certName: "certName",
      certType: "certType",
      certLevel: "certLevel",
      certExpiredDate: moment("2017-10-15").toDate(),
      hasQualification: "hasQualification",
      qualificationName1: "qualificationName1",
      qualificationLevel1: "qualificationLevel1",
      qualificationMajorCategory1: "qualificationMajorCategory1",
      highestQualificationName: "highestQualificationName"
    },
      {
        employeeNo: 'A001', employeeName: '李四',
        businessUnit: '产品',
        level1Dept: '智能投资',
        level2Dept: '一组',
        team: '',
        oaPostName: '',
        employeeId: 'EA002050050',
        passportNo: '302144040030205005202',
        birthday: '2000/01/01',
        gender: '女',
        age: '20',
        nation: '汉',
        marriageStatus: '未婚',
        birthStatus: '未',
        mobilePhoneNumber: '13200020202',
        privateEmail: 'lisi@qq.com'
      },
      {
        employeeNo: 'A001', employeeName: '王五',
        businessUnit: '产品',
        level1Dept: '智能投资',
        level2Dept: '一组',
        team: '',
        oaPostName: '',
        employeeId: 'EA002050050',
        passportNo: '302144040030205005202',
        birthday: '2000/01/01',
        gender: '女',
        age: '20',
        nation: '汉',
        marriageStatus: '未婚',
        birthStatus: '未',
        mobilePhoneNumber: '13200020202',
        privateEmail: 'lisi@qq.com'
      }
    ],
    total: 530
  }
  return Mock.mock(employeeProfiles)
}

export const disableEmployee = (disableEmployeeParams) => {
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  console.info('employeeNo:' + JSON.stringify(disableEmployeeParams.body));
  return Mock.mock(response);
};

export const saveEmployeeUpdates = (updateForm) => {
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const loadWorkingExperiences = (loadForm) => {
  console.info('loadWorkingExperiences:' + JSON.stringify(loadForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: '',data:[{
      workingExperienceId:1,
      employeeNo: 101,
      companyName: "华为",
      companyPost: "软件工程师",
      workingAbroad: "NO",
    }]
  };
  return Mock.mock(response);
}
export const createWorkingExperience = (updateForm) => {
  console.info('createWorkingExperience:' + JSON.stringify(updateForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}
export const deleteWorkingExperience = (updateForm) => {
  console.info('deleteWorkingExperience:' + JSON.stringify(updateForm));
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const downloadTemplate = (updateForm) => {
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}

export const importEmployees = (updateForm) => {
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}
export const exportEmployees = (updateForm) => {
  const response = {
    type: 'success', message: 'disableDone', errorCode: ''
  };
  return Mock.mock(response);
}
