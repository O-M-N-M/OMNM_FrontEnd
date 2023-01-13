import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

import { Typography, Button, Box, Checkbox, FormControlLabel } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface SecondComponentProps {
  mbti: object;
  setMbti: Dispatch<SetStateAction<object>>;
  isPatch: boolean;
}

const SecondComponent = ({ props }: { props: SecondComponentProps }) => {
  const [loading, setLoading] = useState(true);

  const onClick = (v: string) => {
    props.setMbti({
      ...props.mbti,
      [v]: !props.mbti[v as keyof typeof props.mbti],
      'ALL': false
    });
  };

  const onClickAll = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMbti({
      'ENFJ': false, 'ENFP': false, 'ENTJ': false, 'ENTP': false, 'ESFJ': false, 'ESFP': false, 'ESTJ': false, 'ESTP': false,
      'INFJ': false, 'INFP': false, 'INTJ': false, 'INTP': false, 'ISFJ': false, 'ISFP': false, 'ISTJ': false, 'ISTP': false,
      'ALL': true
    })
  }

  useEffect(() => {
    if (Object.values(props.mbti).includes(true)) {
      setLoading(false);
    }
  }, [Object.values(props.mbti)]);

  return (
    <>
      {
        ((!loading && props.isPatch) || (!props.isPatch)) && (
          <Box className='flex flex-wrap ml-24 mt-1'>
            {
              Object.keys(props.mbti).map((v, index) => {
                return (
                  <Box key={index}>
                    {
                      v === 'ALL' ? <></> :
                        props.mbti[v as keyof typeof props.mbti] ? (
                          <Button onClick={() => onClick(v)} className='bg-accent1 rounded-full mx-4 mt-5 w-[5.5rem]'>
                            <Typography className='text-white text-lg font-regular'>{v}</Typography>
                          </Button>
                        ) : (
                          <Button onClick={() => onClick(v)} className='border-2 border-solid border-gray1 rounded-full mx-4 mt-5 w-[5.5rem]'>
                            <Typography className='text-gray1 text-lg font-regular'>{v}</Typography>
                          </Button>
                        )
                    }
                  </Box>
                )
              })
            }
          </Box>
        )
      }

      {
        ((!loading && props.isPatch) || (!props.isPatch)) && (
          <FormControlLabel
            value={'상관없음' || ''}
            control={
              <Checkbox
                checked={props.mbti['ALL' as keyof typeof props.mbti]}
                onChange={(e) => onClickAll(e)}
                icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                checkedIcon={<CheckCircleIcon />}
                size="small"
              />
            }
            label={<Typography className="text-black text-lg font-regular">상관없음</Typography>}
            className='ml-auto mt-4'
          />
        )
      }
    </>
  )
}

export default SecondComponent;