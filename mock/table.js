import Mock from 'mockjs'

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    title: '@sentence(5, 7)',
    'status|1': ['primary', 'success', 'info', 'warning', 'danger'],
    'author|1': ['lee', 'ass', 'jam'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
