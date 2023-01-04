import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface ThirdComponentProps {
  isSmoking: number | undefined;
  setIsSmoking: Dispatch<SetStateAction<number | undefined>>;
  tf: boolean;
}

const items = ['흡연', '비흡연', '상관없음'];

const ThirdComponent = ({ props }: { props: ThirdComponentProps }) => {
  const [checkedIs, setCheckedIs] = useState('');

  useEffect(() => {
    if (typeof props.isSmoking === 'number') {
      setCheckedIs(props.isSmoking.toString());
    }
  }, [props.isSmoking]);

  return (
    <FormControl className='ml-auto'>
      {
        (props.tf && checkedIs !== '') ? (
          <RadioGroup row defaultValue={checkedIs} onChange={(e) => props.setIsSmoking(parseInt(e.target.value))}>
            {
              items.map((v, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={
                      <Radio
                        icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                        checkedIcon={<CheckCircleIcon />}
                        size="small"
                      />
                    }
                    label={<Typography className="text-black text-lg font-regular">{v}</Typography>} />
                )
              })
            }
          </RadioGroup>
        ) :
          (!props.tf) && (
            <RadioGroup row onChange={(e) => props.setIsSmoking(parseInt(e.target.value))}>
              {
                items.map((v, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={index}
                      control={
                        <Radio
                          icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                          checkedIcon={<CheckCircleIcon />}
                          size="small"
                        />
                      }
                      label={<Typography className="text-black text-lg font-regular">{v}</Typography>} />
                  )
                })
              }
            </RadioGroup>
          )
      }
    </FormControl>
  )
}

export default ThirdComponent;