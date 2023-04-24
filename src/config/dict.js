export default {
  businessUnits: [{
    value: 'OFFICE',
    label: '办公室'
  }, {
    value: 'PRODUCT',
    label: '产品'
  }, {
    value: 'TECHNOLOGY',
    label: '技术'
  }, {
    value: 'SYSTEM_ADMIN',
    label: '运维'
  }, {
    value: 'DATA',
    label: '数据'
  }],

  departments: [{
    value: 'SENIOR_MANAGER',
    label: '高级管理'
  }, {
    value: 'SMART_BANK',
    label: '智能银行'
  }, {
    value: 'UNIONPAY_AND_GOV_CORPORATION',
    label: '银联合作与政企合作'
  }, {
    value: 'SMART_BUSINESS',
    label: '智能商业'
  }, {
    value: 'SMART_VOTE',
    label: '智能投资'
  }, {
    value: 'FINANCIAL_SCIENCE',
    label: '金融科技'
  }, {
    value: 'DIGITAL_MARKETING',
    label: '数字营销'
  }, {
    value: 'DATA_ENGINEERING',
    label: '数据工程'
  }, {
    value: 'APPLICATION_PLATFORM',
    label: '应用平台'
  }, {
    value: 'DATA_PLATFORM',
    label: '数据平台'
  }, {
    value: 'QA',
    label: '系统测试'
  }, {
    value: 'SYSTEM_OPERATION',
    label: '系统运维'
  }, {
    value: 'OFFICE_MGR',
    label: '办公室'
  }, {
    value: 'HUMAN_RESOURCE',
    label: '人力资源'
  }, {
    value: 'PLAN_FINANCIAL',
    label: '计划财务'
  }, {
    value: 'ADMIN_MGR',
    label: '行政管理'
  }, {
    value: 'LAW_AUDIT',
    label: '法律合规'
  }, {
    value: 'BRAND_PR',
    label: '品牌公关'
  }, {
    value: 'USER_EXPERIENCE_DESIGN',
    label: '用户体验设计'
  }],

  employeeStatus: [{
    value: 'SERVING',
    label: '在职员工'
  }, {
    value: 'DIMISSION',
    label: '离职员工'
  }, {
    value: 'RETIRED',
    label: '退休员工'
  }],

  genders: [
    {
      value: 'MALE',
      label: '男'
    }, {
      value: 'FEMALE',
      label: '女'
    }, {
      value: 'UNKNOWN',
      label: '-'
    }],

  orggrouptype: [
    {
      value: '0',
      label: '实体团队'
    }, {
      value: '1',
      label: '虚拟团队'
    }
  ],

  orgleveltype: [
    {
      value: '-1',
      label: '虚拟'
    }, {
      value: '0',
      label: '公司'
    },
    {
      value: '1',
      label: '条线'
    },
    {
      value: '2',
      label: '部门'
    },
    {
      value: '３',
      label: '团队'
    }
  ],

  marriageStatus: [
    {
      value: 'UNMARRIED',
      label: '未婚'
    },
    {
      value: 'MARRIED',
      label: '已婚'
    }, {
      value: 'DIVORCED',
      label: '离异'
    }, {
      value: 'OTHERS',
      label: '其他'
    }
  ],
  birthStatus: [
    {
      value: 'NONPAROUS',
      label: '未育'
    }, {
      value: 'BORN',
      label: '已育'
    }, {
      value: 'UNKNOWN',
      label: '-'
    }
  ],
  politicalStatus: [
    {
      value: 'MASS',
      label: '群众'
    }, {
      value: 'MEMBER',
      label: '国民党'
    },
    {
      value: 'PROBATIONARY_PARTY',
      label: '无党派人士'
    }, {
      value: 'PARTY_MEMBER',
      label: '党员'
    }, {
      value: 'JIUSAN',
      label: '九三学社'
    },{
      value: 'PEASANTS_AND_WORKERS_DEMOCRATIC_PARTY',
      label: '农工民主党'
    },
    {
      value: 'OTHERS',
      label: '其他'
    }
  ],
  joinPartyType: [
    {
      value: 'NEW_HIRED',
      label: '新入职'
    }, {
      value: 'NEW_DEVELOPED',
      label: '新发展'
    },
    {
      value: 'FROM_UNIONPAY',
      label: '银联内转入'
    }, {
      value: 'RESUME',
      label: '恢复党籍'
    },
    {
      value: 'OTHERS',
      label: '其他形式'
    }
  ],
  logicalOptions: [
    {
      value: 'YES',
      label: '是'
    },
    {
      value: 'NO',
      label: '否'
    }
  ],
  simpleLogicalOptions: [
    {
      value: 'YES',
      label: '是'
    }, {
      value: 'NO',
      label: '否'
    }, {
      value: 'UNKNOWN',
      label: '-'
    }
  ],
  contractStatus: [
    {
      value: 'EXECUTING',
      label: '执行中'
    }, {
      value: 'TERMINATED',
      label: '终止'
    }, {
      value: 'UNKNOWN',
      label: '-'
    }
  ],
  certificateCategory: [
    {
      value: 'INTERNATIONAL',
      label: '国际级'
    }, {
      value: 'STATE',
      label: '国家级'
    }, {
      value: 'ENTERPRISE',
      label: '企业级'
    }, {
      value: 'UNKNOWN',
      label: '无'
    }
  ],
  professionalQualifications: [
    {
      value: 'PRIMARY',
      label: '初级'
    }, {
      value: 'INTERMEDIATE',
      label: '中级'
    }, {
      value: 'DEPUTY_SENIOR',
      label: '高级(副高)'
    }, {
      value: 'HIGH',
      label: '高级(正高)'
    }
  ],
  officialAcademCredentials: [
    {
      value: 'COLLEGE',
      label: '专科'
    }, {
      value: 'BACHELOR＿DEGREE',
      label: '本科'
    }, {
      value: 'POSTGRADUATE',
      label: '硕士研究生'
    }, {
      value: 'DOCTORATE',
      label: '博士研究生'
    }
  ],
  recruitment: [
    {
      value: 'INITIATIVE',
      label: '主动投递'
    }, {
      value: 'SELF_HELP_SEARCH',
      label: '自助搜寻'
    }, {
      value: 'HEADHUNTING',
      label: '猎头'
    }, {
      value: 'PROJECT_ENGINEER',
      label: '校招'
    }, {
      value: 'INTERPOLATE',
      label: '内推'
    }, {
      value: 'ELSE',
      label: '其他'
    }
  ],
  position: [
    {
      value: '-1',
      label: '助理'
    }, {
      value: '-2',
      label: '助理顾问'
    }, {
      value: '-3',
      label: '顾问'
    }, {
      value: '-4',
      label: '主管'
    }, {
      value: '-5',
      label: '高级顾问'
    }, {
      value: '-6',
      label: '高级主管'
    }, {
      value: '-7',
      label: '经理'
    }, {
      value: '-8',
      label: '高级经理'
    }, {
      value: '-9',
      label: '助理总监'
    }, {
      value: '-10',
      label: '总监'
    }, {
      value: '-11',
      label: 'COO'
    }, {
      value: '-12',
      label: 'CFO'
    }, {
      value: '-13',
      label: 'CEO'
    }
  ],
  grades: [
    {
      value: '-14',
      label: '0'
    }, {
      value: '-15',
      label: '1'
    }, {
      value: '-16',
      label: '2'
    }, {
      value: '-17',
      label: '3'
    }, {
      value: '-18',
      label: '4'
    }, {
      value: '-19',
      label: '5'
    }, {
      value: '-20',
      label: '6'
    }, {
      value: '-21',
      label: '7'
    }, {
      value: '-22',
      label: '8'
    }, {
      value: '-23',
      label: '9'
    }, {
      value: '-24',
      label: '10'
    }, {
      value: '-25',
      label: '11'
    }, {
      value: '-26',
      label: '12'
    }, {
      value: '-27',
      label: '13'
    }, {
      value: '-28',
      label: '14'
    }, {
      value: '-29',
      label: '15'
    }, {
      value: '-30',
      label: '16'
    }, {
      value: '-31',
      label: '17'
    }, {
      value: '-32',
      label: '18'
    }, {
      value: '-33',
      label: '19'
    }, {
      value: '-34',
      label: '20'
    }
  ],
  householdType: [
    {
      value: 'PROVINCIAL_RURAL',
      label: '外省农村'
    }, {
      value: 'PROVINCIAL_TOWNS',
      label: '外省城镇'
    }, {
      value: 'THIS_CITY_TOWN',
      label: '本市城镇'
    }, {
      value: 'MELBOURNE_COUNTRY',
      label: '本市农村'
    }
  ],
  signTimes: [
    {
      value: '1',
      label: '1'
    }, {
      value: '2',
      label: '2'
    }, {
      value: '0',
      label: '无固定'
    }
  ],
  reasonsForLeaving: [
    {
      value: 'PERSONAL_DEVELOPMENT',
      label: '个人发展'
    }, {
      value: 'FAMILY_REASONS',
      label: '家庭原因'
    }, {
      value: 'PHYSICAL_REASON',
      label: '身体原因'
    }, {
      value: 'DISCOURAGING',
      label: '劝退'
    }, {
      value: 'EXPEL',
      label: '开除'
    }, {
      value: 'ELSE',
      label: '其他'
    }
  ]

}
