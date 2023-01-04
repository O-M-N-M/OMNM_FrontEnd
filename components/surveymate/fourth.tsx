import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Props } from "next/script";


interface FourthComponentProps {
  department: number | undefined;
  setDepartment: Dispatch<SetStateAction<number | undefined>>;
  tf: boolean;
}

const items = ['같은 학과', '다른 학과', '상관없음'];

const FourthComponent = ({ props }: { props: FourthComponentProps }) => {
  const [checkedDep, setCheckedDep] = useState('');

  useEffect(() => {
    if (typeof props.department === 'number') {
      setCheckedDep(props.department.toString());
    }
  }, [props.department]);

  return (
    <FormControl className='ml-auto'>
      {
        (props.tf && checkedDep !== '') ? (
          <RadioGroup row defaultValue={checkedDep} onChange={(e) => props.setDepartment(parseInt(e.target.value))}>
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
            <RadioGroup row onChange={(e) => props.setDepartment(parseInt(e.target.value))}>
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

export default FourthComponent;