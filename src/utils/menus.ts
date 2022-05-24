const UnionMenus = [
  {
    name: '企业管理',
    path: '/shops',
    icon: '',
    children: [
      {
        name: '企业概览',
        path: '/',
        auth: ''
      },
      {
        name: '企业设置',
        path: '/book',
        auth: ''
      },
      {
        name: '企业设置2',
        path: '/book/12',
        auth: ''
      }
      // {
      //   name: '云众设置',
      //   path: '/shops/yz',
      //   auth: 'SF_BASE_CONFIG_QUERY'
      // }
    ]
  },
  {
    name: '员工管理',
    path: '/staff',
    icon: '',
    children: [
      {
        name: '组织架构',
        path: '/staff/org',
        auth: ''
      },
      {
        name: '岗位角色',
        path: '/staff/group',
        auth: ''
      },
      {
        name: '我的权限',
        path: '/staff/myrights',
        auth: ''
      },
      {
        name: '日志管理',
        path: '/staff/logs',
        auth: ''
      }
    ]
  },
  {
    name: '发票管理',
    path: '/invoice',
    icon: '',
    children: [
      {
        name: '发票申请',
        path: '/invoice/request',
        auth: ''
      },
      {
        name: '发票列表',
        path: '/invoice/list',
        auth: ''
      },
      {
        name: '信息管理',
        path: '/invoice/info',
        auth: ''
      },
      /* {
        name: '账单查询',
        path: '/invoice/acctitem',
        auth: ''
      }, */
    ]
  },
];

export { UnionMenus };