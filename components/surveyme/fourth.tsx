import { Dispatch, SetStateAction } from "react";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface FourthComponentProps {
  department: string;
  setDepartment: Dispatch<SetStateAction<string>>;
}

const departments = [
  'AI학과', '간호학과', '건축학부', '경영학부(경영학)', '경영학부(글로벌금융)', '경제학부', '공간연출전공',
  '공공인재학부', '광고홍보학과', '교육학과', '국어국문학과', '국제물류학과', '기계공학부', '도시계획 ꞏ 부동산학과',
  '독일어문학전공', '러시아어문학전공', '문헌정보학과', '물리학과', '미디어커뮤니케이션학부', '사회기반시스템공학부',
  '사회복지학부', '사회학과', '산업보안학과', '생명과학과', '소프트웨어학부', '수학과', '심리학과', '약학부',
  '에너지시스템공학부', '역사학과', '연극전공', '영어교육과', '영어영문학과', '영화전공', '유아교육과',
  '융합공학부', '응용통계학과', '의학부', '일본어문학전공', '전자전기공학부', '정치국제학과', '중국어문학전공',
  '지식경영학부', '차세대반도체학과', '철학과', '체육교육과', '프랑스어문학전공', '화학과', '화학신소재공학부'
];

const FourthComponent = ({ props }: { props: FourthComponentProps }) => {
  const onChange = (e: SelectChangeEvent) => {
    props.setDepartment(e.target.value);
  }

  return (
    <FormControl size='small' className='ml-auto'>
      <Select
        value={props.department}
        displayEmpty
        onChange={onChange}
        MenuProps={{
          disablePortal: true,
          PaperProps: {
            sx: {
              color: '#9B9EA1',
              fontSize: '18px',
              border: 'solid 1px #DBDBDB',
              boxShadow: 'none',
              width: 'fit',
              maxHeight: '500px',
              marginTop: '10px',
              borderRadius: '16px'
            }
          }
        }}
        sx={{
          minWidth: '250px',
          "&:hover": {
            "&& fieldset": {
              borderColor: "#1CDDAD",
              borderRadius: '16px',
            }
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#1CDDAD',
            borderRadius: '16px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1CDDAD',
            borderRadius: '16px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1CDDAD',
            borderRadius: '16px',
          },
          '.MuiSvgIcon-root ': {
            fill: '#1CDDAD !important',
          }
        }}
        className='text-gray1 text-lg font-regular w-40 text-center'
      >
        <MenuItem value='' className="text-lg">학과명 선택</MenuItem>
        {
          departments.map((v, index) => {
            return (
              <MenuItem key={index} value={v} className='text-lg'>{v}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  );
};

export default FourthComponent;