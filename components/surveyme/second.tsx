import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SecondComponentProps {
  mbti: string | undefined;
  setMbti: Dispatch<SetStateAction<string | undefined>>;
}

const mbtis = [
  'ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP',
  'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'
];

const SecondComponent = ({ props }: { props: SecondComponentProps }) => {
  const handleChange = (e: SelectChangeEvent) => {
    props.setMbti(e.target.value);
  };

  return (
    <FormControl size='small' className='ml-auto'>
      <Select
        value={props.mbti}
        displayEmpty
        onChange={handleChange}
        MenuProps={{
          disablePortal: true,
          PaperProps: {
            sx: {
              color: '#9B9EA1',
              fontSize: '18px',
              border: 'solid 1px #DBDBDB',
              boxShadow: 'none',
              width: '160px',
              marginTop: '10px',
              borderRadius: '16px'
            }
          }
        }}
        sx={{
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
            fill: '#1CDDAD !important'
          }
        }}
        className='text-gray1 text-lg font-regular w-40 text-center'
      >
        <MenuItem value='' className="text-lg">선택</MenuItem>
        {
          mbtis.map((v, index) => {
            return (
              <MenuItem key={index} value={v} className='text-lg'>{v}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}

export default SecondComponent;