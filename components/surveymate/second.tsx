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
          <Box className='flex flex-wrap labtop:justify-start mobile:justify-center labtop:ml-24 mt-1'>
            {
              Object.keys(props.mbti).map((v, index) => {
                return (
                  <Box key={index}>
                    {
                      v === 'ALL' ? <></> :
                        props.mbti[v as keyof typeof props.mbti] ? (
                          <Button onClick={() => onClick(v)} className='border border-solid border-accent1 bg-accent1 rounded-full labtop:mx-4 mobile:mr-2 labtop:mt-5 mobile:mt-2 labtop:w-[5.5rem] mobile:w-16'>
                            <Typography className='text-white labtop:text-lg mobile:text-sm font-regular'>{v}</Typography>
                          </Button>
                        ) : (
                          <Button onClick={() => onClick(v)} className='border border-solid border-gray1 rounded-full labtop:mx-4 mobile:mr-2 labtop:mt-5 mobile:mt-2 labtop:w-[5.5rem] mobile:w-16'>
                            <Typography className='text-gray1 labtop:text-lg mobile:text-sm font-regular'>{v}</Typography>
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
            label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">상관없음</Typography>}
            className='ml-auto mt-4'
          />
        )
      }
    </>
  )
}

export default SecondComponent;