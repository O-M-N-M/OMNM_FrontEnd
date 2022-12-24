import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SecondComponentProps {
  mbti: string | undefined;
  setMbti: Dispatch<SetStateAction<string | undefined>>;
}

const SecondComponent = ({ props }: { props: SecondComponentProps }) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setMbti(event.target.value);
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
        <MenuItem value={0} className="text-lg">ENFJ</MenuItem>
        <MenuItem value={1} className="text-lg">ENFP</MenuItem>
        <MenuItem value={2} className="text-lg">ENTJ</MenuItem>
        <MenuItem value={3} className="text-lg">ENTP</MenuItem>
        <MenuItem value={4} className="text-lg">ESFJ</MenuItem>
        <MenuItem value={5} className="text-lg">ESFP</MenuItem>
        <MenuItem value={6} className="text-lg">ESTJ</MenuItem>
        <MenuItem value={7} className="text-lg">ESTP</MenuItem>
        <MenuItem value={8} className="text-lg">INFJ</MenuItem>
        <MenuItem value={9} className="text-lg">INFP</MenuItem>
        <MenuItem value={10} className="text-lg">INTJ</MenuItem>
        <MenuItem value={11} className="text-lg">INTP</MenuItem>
        <MenuItem value={12} className="text-lg">ISFJ</MenuItem>
        <MenuItem value={13} className="text-lg">ISFP</MenuItem>
        <MenuItem value={14} className="text-lg">ISTJ</MenuItem>
        <MenuItem value={15} className="text-lg">ISTP</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SecondComponent;