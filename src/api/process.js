import request from '@/utils/request'

export function getAppList(params) {
  return request({
    url: '/api/app/listApp',
    method: 'post',
    data: {...params}
  })
}

export function getApp(id) {
  return request({
    url: `/api/app/${id}`,
    method: 'get'
  })
}

export function createApp(params) {
  return request({
    url: '/api/app',
    method: 'post',
    data: {...params}
  })
}

export function updateApp(params) {
  return request({
    url: '/api/app',
    method: 'put',
    data: {...params}
  })
}

export function getTemplateList(params) {
  return request({
    url: '/api/template',
    method: 'get',
    data: {...params}
  })
}

export function getRequestLogList(params) {
  return request({
    url: '/api/send/list',
    method: 'get',
    data: {...params}
  })
}

export function searchUsers(username) {
  return request({
    url: `/api/user/search/${username}`,
    method: 'get'
  })
}

/// Employee Module

export function getEmployees(params) {
  return request({
    url: '/staffManage/searchEmployees',
    method: 'post',
    data: {...params}
  })
}

export function disableEmployee(params) {
  return request({
    url: '/staffManage/deleteEmployee',
    method: 'post',
    data: {...params}
  })
}

export function createWorkingExperience(params) {
  return request({
    url: '/staffManage/insertWorkingExperience',
    method: 'post',
    data: {...params}
  })
}

export function checkoutEmployeeNameCodeByEmployeeNo(params) {
  return request({
    url: '/staffManage/checkoutEmployeeName',
    method: 'post',
    data: {...params}
  })
}

export function loadWorkingExperiences(params) {
  return request({
    url: '/staffManage/loadWorkingExperiences',
    method: 'post',
    data: {...params}
  })
}

export function deleteWorkingExperience(params) {
  return request({
    url: '/staffManage/deleteWorkingExperience',
    method: 'post',
    data: {...params}
  })
}

export function saveEmployeeUpdates(params) {
  return request({
    url: '/staffManage/updateEmployee',
    method: 'post',
    data: {...params}
  })
}

/// NewHired Module

export function getNewHiredEmployees(params) {
  return request({
    url: '/staffManage/getNewHiredEmployees',
    method: 'post',
    data: {...params}
  })
}

export function moveToOnBoard(params) {
  return request({
    url: '/staffManage/moveToOnBoard',
    method: 'post',
    data: {...params}
  })
}
export function updateNewHired(params) {
  return request({
    url: '/staffManage/updateNewHired',
    method: 'post',
    data: {...params}
  })
}
export function moveToBlacklist(params) {
  return request({
    url: '/staffManage/moveToBlacklist',
    method: 'post',
    data: {...params}
  })
}
export function createNewHired(params) {
  return request({
    url: '/staffManage/createNewHired',
    method: 'post',
    data: {...params}
  })
}


/// InternEmployee Module

export function getInterns(params) {
  return request({
    url: '/staffManage/getInterns',
    method: 'post',
    data: {...params}
  })
}
export function createNewIntern(params) {
  return request({
    url: '/staffManage/createNewIntern',
    method: 'post',
    data: {...params}
  })
}
export function updateInternToFullTime(params) {
  return request({
    url: '/staffManage/updateInternToFullTime',
    method: 'post',
    data: {...params}
  })
}



/// Dimission Module

export function getDimissions(params) {
  return request({
    url: '/staffManage/getDimissions',
    method: 'post',
    data: {...params}
  })
}
export function dimissionReEntry(params) {
  return request({
    url: '/staffManage/dimissionReEntry',
    method: 'post',
    data: {...params}
  })
}

/// EmployBlackList Module


export function getEmployBlackList(params) {
  return request({
    url: '/staffManage/searchBlacklist',
    method: 'post',
    data: {...params}
  })
}

export function createOrganization(params) {
  return request({
    url: '/staffManage/organization/insertOrganization',
    method: 'post',
    data: {...params}
  })
}

export function getOrganization(params) {
  return request({
    url: '/staffManage/organization/searchPageOrganizations',
    method: 'post',
    data: {...params}
  })
}

export function queryOrgNameRepeat(orgName) {
  return request({
    url: '/staffManage/organization/queryOrgNameRepeat?orgName='+orgName,
    method: 'get',
  })
}

export function getEmployeeOrganization(params) {
  return request({
    url: '/staffManage/organization/queryEmployeeOrganization',
    method: 'post',
    data: {...params}
  })
}

export function deleteOrganizationById(params) {
  return request({
    url: '/staffManage/organization/deleteOrganization',
    method: 'post',
    data: {...params}
  })
}
export function updateOrganization(params) {
  return request({
    url: '/staffManage/organization/updateOrganization',
    method: 'post',
    data: {...params}
  })
}

export function updateOrgByemployeeNo(params) {
  return request({
    url: '/staffManage/updateOrgByemployeeNo',
    method: 'post',
    data: {...params}
  })
}


export function queryOnOrganization(id) {
  return request({
    url: '/staffManage/organization/queryOnOrganization?id='+id,
    method: 'get'
  })

}

export function queryEmployeeNames() {
  return request({
    url: '/staffManage/organization/searchEmployeeNames',
    method: 'get'
  })
}

export function queryLevel1() {
  return request({
    url: '/staffManage/searchEmployeeShowLevel1',
    method: 'get'
  })
}

export function queryBusinessUnitAll() {
  return request({
    url: '/staffManage/searchBusinessUnitAll',
    method: 'get'
  })
}

export function queryOrganizationById(id) {
  return request({
    url: '/staffManage/searchOrganizationsById?id='+id,
    method: 'get'
  })
}

export function queryOrganizationByName(orgName) {
  return request({
    url: '/staffManage/searchOrganizationsByName?orgName='+orgName,
    method: 'get'
  })
}

export function queryOrganizations() {
  return request({
    url: '/staffManage/organization/queryAllOrganization',
    method: 'get'
  })
}
