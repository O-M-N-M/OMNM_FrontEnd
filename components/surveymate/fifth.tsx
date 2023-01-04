import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface FifthComponentProps {
  lifeCycle: number | undefined;
  setLifeCycle: Dispatch<SetStateAction<number | undefined>>;
  tf: boolean;
}

const items = ['아침형', '저녁형', '상관없음'];

const FifthComponent = ({ props }: { props: FifthComponentProps }) => {
  const [checkedLc, setCheckedLc] = useState('');

  useEffect(() => {
    if (typeof props.lifeCycle === 'number') {
      setCheckedLc(props.lifeCycle.toString());
    }
  }, [props.lifeCycle]);

  return (
    <FormControl className='ml-auto'>
      {
        (props.tf && checkedLc !== '') ? (
          <RadioGroup row defaultValue={checkedLc} onChange={(e) => props.setLifeCycle(parseInt(e.target.value))}>
            {
              items.map((v, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={index.toString()}
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
            <RadioGroup row onChange={(e) => props.setLifeCycle(parseInt(e.target.value))}>
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

export default FifthComponent;