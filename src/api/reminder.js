import request from '@/utils/request'

/**
 * 查询
 * @param params
 */
export function search(params) {
  return request({
    url: 'staffManage/sendEmail/search',
    method: 'post',
    data: {...params}
  })
}

export function checkStatus(id) {
  return request({
    url: 'staffManage/sendEmail/checkStatus?id=' + id,
    method: 'get'
  })
}

export function send(params) {
  return request({
    url: 'staffManage/sendEmail/send',
    method: 'post',
    data: {...params}
  })
}

/**
 * 添加
 * @param params
 */
export function save(params) {
  return request({
    url: 'staffManage/sendEmail/save',
    method: 'post',
    data: {...params}
  })
}

/**
 * 更新
 * @param params
 */
export function update(params) {
  return request({
    url: 'staffManage/sendEmail/update',
    method: 'post',
    data: {...params}
  })
}

/**
 * 查询已发送的纪念日和生日邮件
 * @param params
 */
export function searchSendEmail(params) {
  return request({
    url: 'staffManage/sendEmail/searchSendEmail',
    method: 'post',
    data: {...params}
  })
}

export function searchEmployeeEmail(params) {
  return request({
    url: '/staffManage/organization/getEmployeeEmail',
    method: 'post',
    data: {...params}
  })
}

export function queryImg(params) {
  return request({
    url: '/staffManage/sendEmail/queryImg',
    method: 'post',
    data: {...params}
  })
}
// export function getApp(id) {
//   return request({
//     url: `/api/app/${id}`,
//     method: 'get'
//   })
// }
