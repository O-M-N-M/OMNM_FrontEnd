import { createTheme, FormControl, MenuItem, Select, SelectChangeEvent, ThemeProvider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SecondComponentProps {
  mbti: string | undefined;
  setMbti: Dispatch<SetStateAction<string | undefined>>;
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Spoqa Han Sans Neo'
    ].join(',')
  }
});

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
      <ThemeProvider theme={theme}>
        <Select
          value={props.mbti}
          displayEmpty
          onChange={handleChange}
          MenuProps={{
            disablePortal: true,
            PaperProps: {
              sx: {
                color: '#9B9EA1',
                fontSize: { xs: '16px', md: '18px' },
                border: 'solid 1px #DBDBDB',
                boxShadow: 'none',
                width: { xs: '112px', md: '160px' },
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
          className='text-gray1 labtop:text-lg mobile:text-base font-regular labtop:w-40 mobile:w-28 text-center'
        >
          <MenuItem value='' className="labtop:text-lg mobile:text-base">선택</MenuItem>
          {
            mbtis.map((v, index) => {
              return (
                <MenuItem key={index} value={v} className='labtop:text-lg mobile:text-base'>{v}</MenuItem>
              )
            })
          }
        </Select>
      </ThemeProvider>
    </FormControl>
  )
}

export default SecondComponent;