import Image from 'next/image';

import { Box, Checkbox, FormControlLabel, Typography, useMediaQuery } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Logo from '../../public/logo5.png';

interface ConsentProps {
  isAgree: boolean;
  onChange: () => void;
  handleClose: () => void;
}

const Consent = ({ props }: { props: ConsentProps }) => {
  const isLabtop: boolean = useMediaQuery('(min-width:1024px)');

  return (
    <>
      {
        isLabtop ? (
          <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid #2DD4BF', borderRadius: '10px', width: '40%', minWidth: '672px', height: '40%', minHeight: '615px', outline: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', paddingX: '48px', paddingY: '36px' }} >
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image src={Logo} width={92.92} height={15.9} />
                <Typography sx={{ color: '#383838', fontSize: '18px', fontWeight: '500', marginLeft: '8px' }}>개인정보 수집 및 이용 동의서</Typography>
              </Box>

              <Box sx={{ border: '1px solid #DBDBDB', borderRadius: '10px', width: '100%', height: '100%', overflow: 'auto', paddingX: '32px', paddingY: '30px', marginTop: '24px' }}>
                <Typography sx={{ color: '#383838', fontSize: '16px', fontWeight: '400' }}>
                  {`개인정보보호법에 따라 이하 omnm에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

1. 수집하는 개인정보

회원가입 시점에 omnm이 이용자로부터 수집하는 개인정보는 아래와 같습니다.
- 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 성별, 카카오톡 아이디, 생활관 정보, 학교 이메일주소를 수집합니다.
서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
- 회원정보 또는 개별 서비스에서 프로필 정보(프로필 사진)를 설정할 수 있습니다. 

서비스 이용 과정에서 쿠키, 서비스 이용 기록이 생성되어 수집될 수 있습니다. 
구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나,
2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다.

2. 수집한 개인정보의 이용

omnm 및 omnm 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
- 회원 가입 의사의 확인, 연령 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
- 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.
- 법령 및 omnm 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
- 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.
- 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.

3. 개인정보의 보관기간

omnm은 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.

4. 개인정보 수집 및 이용 동의를 거부할 권리

이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.`}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '24px' }}>
                <FormControlLabel
                  value={props.isAgree}
                  control={
                    <Checkbox
                      checked={props.isAgree}
                      onChange={() => { props.onChange(); props.handleClose(); }}
                      icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                      checkedIcon={<CheckCircleIcon />}
                      size="small" />
                  }
                  label={<Typography sx={{ color: '#383838', fontSize: '18px', fontWeight: '500' }}>위에 적힌 내용을 모두 읽고 개인정보 수집 및 이용에 동의합니다</Typography>}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid #2DD4BF', borderRadius: '10px', width: '40%', minWidth: '327px', height: '40%', minHeight: '388px', outline: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', paddingX: '12px', paddingY: '24px' }} >
              <Typography sx={{ color: '#383838', fontSize: '16px', fontWeight: '500', marginLeft: '8px' }}>개인정보 수집 및 이용 동의서</Typography>

              <Box sx={{ border: '1px solid #DBDBDB', borderRadius: '10px', width: '100%', height: '100%', overflow: 'auto', paddingX: '8px', paddingY: '16px', marginTop: '12px' }}>
                <Typography sx={{ color: '#383838', fontSize: '12px', fontWeight: '400' }}>
                  {`개인정보보호법에 따라 이하 omnm에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

1. 수집하는 개인정보

회원가입 시점에 omnm이 이용자로부터 수집하는 개인정보는 아래와 같습니다.
- 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 성별, 카카오톡 아이디, 생활관 정보, 학교 이메일주소를 수집합니다.
서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
- 회원정보 또는 개별 서비스에서 프로필 정보(프로필 사진)를 설정할 수 있습니다. 

서비스 이용 과정에서 쿠키, 서비스 이용 기록이 생성되어 수집될 수 있습니다. 
구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나,
2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다.

2. 수집한 개인정보의 이용

omnm 및 omnm 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
- 회원 가입 의사의 확인, 연령 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
- 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.
- 법령 및 omnm 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
- 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.
- 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.

3. 개인정보의 보관기간

omnm은 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.

4. 개인정보 수집 및 이용 동의를 거부할 권리

이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.`}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '14px' }}>
                <FormControlLabel
                  value={props.isAgree}
                  control={
                    <Checkbox
                      checked={props.isAgree}
                      onChange={() => { props.onChange(); props.handleClose(); }}
                      icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                      checkedIcon={<CheckCircleIcon />}
                      size="small" />
                  }
                  label={<Typography sx={{ color: '#383838', fontSize: '14px', fontWeight: '500' }}>위의 내용 전부 확인 후 동의합니다.</Typography>}
                />
              </Box>
            </Box>
          </Box>
        )
      }
    </>
  )
};

export default Consent;