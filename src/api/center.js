import fetch from '@/fetch/fetch';


/*账户总览*/
export function queryAccountByUserId() {
  return fetch({
    url: '/accountcenter/v1/ac/queryAccountByUserId',
    method: 'get',
    params:{}
  });
}


/*交易记录*/
export function queryAccountJnlByUserId(type,startDate,endDate,pageNum,pageSize) {
  return fetch({
    url: '/accountcenter/v1/ac/queryAccountJnlByUserId',
    method: 'get',
    params:{type,startDate,endDate,pageNum,pageSize}
  });
}





/*获取银行卡信息*/
export function userInfoBankcard(cardNo) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/bankcard/full_info',
    method: 'get',
    params:{cardNo}
  });
}

/*预充值*/
export function rechargePre(accNo,amount,idCard,idHolder,mobile) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/recharge/pre',
    method: 'post',
    data:{accNo,amount,idCard,idHolder,mobile}
  });
}

/*充值*/
export function rechargeSubmit(smsCode,orderId) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/recharge/submit',
    method: 'post',
    data:{smsCode,orderId}
  });
}

/*网银支付*/
export function rechargeCyberbank(amount,payId) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/recharge/cyberbank',
    method: 'post',
    data:{amount,payId}
  });
}

/*实名认证*/
export function profileAuthId(idCard,idHolder,isPhoto) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/info/profile/auth_id',
    method: 'post',
    data:{idCard,idHolder,isPhoto}
  });
}

/*预绑卡*/
export function bandcardBindPre(param) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/bandcard/bind/pre',
    method: 'post',
    data:{param}
  });
}

/*确认绑卡*/
export function bandcardBindConfirm(param) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/bandcard/bind/confirm',
    method: 'post',
    data:{param}
  });
}

/*申请提现*/
export function withdrawalApplicationNew(amount,password,smsCode) {
  return fetch({
    url: '/paymentCenter-payment/v1/payment/withdrawal/application/new',
    method: 'post',
    data:{amount,password,smsCode}
  });
}



/*获取优惠券列表*/
export function userCouponList(userId,status,pageSize,pageNum) {
  return fetch({
    url: '/goldexchange-marketing-center/user/coupon/list',
    method: 'get',
    params:{userId,status,pageSize,pageNum}
  });
}


/*获取测评*/
export function evaluationList() {
  return fetch({
    url: '/goldexchange-user/u/evaluation',
    method: 'get'
  });
}

/*获取测评*/
export function saveEvalution(query) {
  return fetch({
    url: '/goldexchange-user/u/savaresult/evaluation',
    method: 'post',
    data:query
  });
}

/*我的投资记录*/

export function getOrderList(status,pageNum,pageSize) {
  return fetch({
    url: '/goldexchange-order/v1/u/orderList',
    method: 'get',
    params:{
      status,
      pageNum,
      pageSize
    }
  });
}

/*可用优惠券*/

export function getPreview() {
  return fetch({
    url: '/goldexchange-marketing-center/user/coupon/preview',
    method: 'get',
  });
}

/*修改登录密码*/

export function modifyPSW(phoneNumber,newpassWord,captcha,siution) {
  return fetch({
    url: '/goldexchange-user/u/updatepassword',
    method: 'post',
    data:{
      phoneNumber,
      newpassWord,
      captcha,
      siution
    }
  });
}

/*设置交易密码*/
export function transactionPSW(tradepassword) {
  return fetch({
    url: '/goldexchange-user/u/tradepassword/add',
    method: 'post',
    data:{
      tradepassword
    }
  });
}

/*修改交易密码*/
export function tradePassword(orginalPassword,newpassWord) {
  return fetch({
    url: '/goldexchange-user/u/tradepassword/update',
    method: 'post',
    data:{
      orginalPassword,
      newpassWord
    }
  });
}
