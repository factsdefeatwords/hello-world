import fetch from '@/fetch/fetch';


/*个人优惠券列表*/
export function userCouponChoose(projectType,projectPeriod) {
  return fetch({
    url: '/goldexchange-marketing-center/user/coupon/choose',
    method: 'get',
    params:{projectType,projectPeriod}
  });
}

/*获取项目列表*/
export function projectYinpiaoList(pageNum,pageSize,monthFilter,orderType) {
  return fetch({
    url: '/goldexchange-project-center/v1/project/api/project/yinpiao/list',
    method: 'get',
    params:{pageNum,pageSize,monthFilter,orderType}
  });
}

/*获取新手投资*/
export function projectNewInfo() {
  return fetch({
    url: '/goldexchange-project-center/v1/project/api/project/new/info',
    method: 'get',
    params:{}
  });
}

/*根据ID获取项目详情*/
export function projectInfoById(id) {
  return fetch({
    url: '/goldexchange-project-center/v1/project/api/project/info/'+id,
    method: 'get',
    params:{}
  });
}

/*根据ID获取投资记录*/
export function orderHistory(id,pageNum,pageSize) {
  return fetch({
    url: '/goldexchange-order/v1/n/orderHistory/'+id,
    method: 'get',
    params:{pageNum,pageSize}
  });
}




/*下单*/
export function addOrder(amount,bonusId,orderType,productId) {
  return fetch({
    url: '/goldexchange-order/v1/u/addOrder',
    method: 'post',
    data:{amount,bonusId,orderType,productId}
  });
}


/*获取协议*/
export function protocol(location) {
  return fetch({
    url: '/goldexchange-project-center/name',
    method: 'get',
    params:{location}
  });
}


/*获取类似标id*/
export function projectSimilar(yieldRate,timeHorizonUnit,timeHorizonValue) {
  return fetch({
    url: '/goldexchange-project-center/v1/project/user/project/similar',
    method: 'get',
    params:{yieldRate,timeHorizonUnit,timeHorizonValue}
  });
}


