import { } from '@/api/center';

const center = {
  state: {
    //银行图标字典表
    bankIconList:{
      ICBC:{
        logo:require('../../assets/logo/logo/ICBC.png'),
        longLogo:require('../../assets/logo/longLogo/ICBC.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/ICBC.png'),
      },
      ABC:{
        logo:require('../../assets/logo/logo/ABC.png'),
        longLogo:require('../../assets/logo/longLogo/ABC.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/ABC.png'),
      },
      BCOM:{
        logo:require('../../assets/logo/logo/BCOM.png'),
        longLogo:require('../../assets/logo/longLogo/BCOM.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/BCOM.png'),
      },
      BOB:{
        logo:require('../../assets/logo/logo/BOB.png'),
        longLogo:require('../../assets/logo/longLogo/BOB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/BOB.png'),
      },
      BOC:{
        logo:require('../../assets/logo/logo/BOC.png'),
        longLogo:require('../../assets/logo/longLogo/BOC.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/BOC.png'),
      },
      CCB:{
        logo:require('../../assets/logo/logo/CCB.png'),
        longLogo:require('../../assets/logo/longLogo/CCB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/CCB.png'),
      },
      CEB:{
        logo:require('../../assets/logo/logo/CEB.png'),
        longLogo:require('../../assets/logo/longLogo/CEB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/CEB.png'),
      },
      CIB:{
        logo:require('../../assets/logo/logo/CIB.png'),
        longLogo:require('../../assets/logo/longLogo/CIB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/CIB.png'),
      },
      CITIC:{
        logo:require('../../assets/logo/logo/CITIC.png'),
        longLogo:require('../../assets/logo/longLogo/CITIC.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/CITIC.png'),
      },
      CMB:{
        logo:require('../../assets/logo/logo/CMB.png'),
        longLogo:require('../../assets/logo/longLogo/CMB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/CMB.png'),
      },
      CMBC:{
        logo:require('../../assets/logo/logo/CMBC.png'),
        longLogo:require('../../assets/logo/longLogo/CMBC.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/CMBC.png'),
      },
      GDB:{
        logo:require('../../assets/logo/logo/GDB.png'),
        longLogo:require('../../assets/logo/longLogo/GDB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/GDB.png'),
      },
      HXB:{
        logo:require('../../assets/logo/logo/HXB.png'),
        longLogo:require('../../assets/logo/longLogo/HXB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/HXB.png'),
      },
      HZB:{
        logo:require('../../assets/logo/logo/HZB.png'),
        longLogo:require('../../assets/logo/longLogo/HZB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/HZB.png'),
      },
      JSB:{
        logo:require('../../assets/logo/logo/JSB.png'),
        longLogo:require('../../assets/logo/longLogo/JSB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/JSB.png'),
      },
      NBCB:{
        logo:require('../../assets/logo/logo/NBCB.png'),
        longLogo:require('../../assets/logo/longLogo/NBCB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/NBCB.png'),
      },
      PAB:{
        logo:require('../../assets/logo/logo/PAB.png'),
        longLogo:require('../../assets/logo/longLogo/PAB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/PAB.png'),
      },
      PSBC:{
        logo:require('../../assets/logo/logo/PSBC.png'),
        longLogo:require('../../assets/logo/longLogo/PSBC.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/PSBC.png'),
      },
      SHB:{
        logo:require('../../assets/logo/logo/SHB.png'),
        longLogo:require('../../assets/logo/longLogo/SHB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/SHB.png'),
      },
      SPDB:{
        logo:require('../../assets/logo/logo/SPDB.png'),
        longLogo:require('../../assets/logo/longLogo/SPDB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/SPDB.png'),
      },
      ZSB:{
        logo:require('../../assets/logo/logo/ZSB.png'),
        longLogo:require('../../assets/logo/longLogo/ZSB.png'),
        whiteLogo:require('../../assets/logo/whiteLogo/ZSB.png'),
      },
      BRCB:{
        longLogo:require('../../assets/logo/longLogo/BRCB.png'),
      },
      SRCB:{
        longLogo:require('../../assets/logo/longLogo/SRCB.png'),
      },
      TCCB:{
        longLogo:require('../../assets/logo/longLogo/TCCB.png'),
      },
      UNIONPAY:{
        longLogo:require('../../assets/logo/longLogo/UNIONPAY.png'),
      }
    },
  },

  mutations: {
    SET_BANK_ICON_LIST: (state,bankIconList) => {
      state.bankIconList = bankIconList;
    }
  },

  actions: {

  }
};

export default center;
