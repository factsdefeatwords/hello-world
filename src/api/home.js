import fetch from '@/fetch/fetch';


/*新手直投*/
export function getParam() {
  return fetch({
    url: '/goldexchange-user/i/firstpage/newparam',
    method: 'get'
  });
}

/*银票*/
export function getYinpiao() {
  return fetch({
    url: '/goldexchange-project-center/v1/project/api/project/yinpiao/banner',
    method: 'get'
  });
}

/*获取活动详情*/
export function getActivity() {
  return fetch({
    url: '/goldexchange-marketing-center/activity/api/activity/list/online',
    method: 'get'
  });
}
