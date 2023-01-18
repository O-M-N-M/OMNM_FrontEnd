import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface SeventhComponentProps {
  nationality: number | undefined;
  setNationality: Dispatch<SetStateAction<number | undefined>>;
  isPatch: boolean;
}

const items = ['대한민국', '상관없음'];

const SeventhComponent = ({ props }: { props: SeventhComponentProps }) => {
  const [checkedNat, setCheckedNet] = useState('');

  useEffect(() => {
    if (typeof props.nationality === 'number') {
      setCheckedNet(props.nationality.toString());
    }
  }, [props.nationality]);

  return (
    <FormControl className='flex flex-row flex-wrap labtop:ml-auto mobile:ml-6 mobile:mt-2'>
      {
        (props.isPatch && checkedNat !== '') ? (
          <RadioGroup row defaultValue={checkedNat} onChange={(e) => props.setNationality(parseInt(e.target.value))}>
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
                    label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">{v}</Typography>} />
                )
              })
            }
          </RadioGroup>
        ) :
          (!props.isPatch) && (
            <RadioGroup row onChange={(e) => props.setNationality(parseInt(e.target.value))}>
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
                      label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">{v}</Typography>} />
                  )
                })
              }
            </RadioGroup>
          )
      }
    </FormControl>
  )
}

export default SeventhComponent;