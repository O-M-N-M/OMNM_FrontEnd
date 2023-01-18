import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface EighthComponentProps {
  armyService: number | undefined | null;
  setArmyService: Dispatch<SetStateAction<number | undefined | null>>;
  isPatch: boolean;
}

const items = ['군필', '미필', '상관없음'];

const EighthComponent = ({ props }: { props: EighthComponentProps }) => {
  const [checkedAs, setCheckedAs] = useState('');

  useEffect(() => {
    if (typeof props.armyService === 'number') {
      setCheckedAs(props.armyService.toString());
    }
  }, [props.armyService]);

  return (
    <FormControl className='flex flex-row flex-wrap labtop:ml-auto mobile:ml-6 mobile:mt-2'>
      {
        (props.isPatch && checkedAs !== '') ? (
          <RadioGroup row defaultValue={checkedAs} onChange={(e) => props.setArmyService(parseInt(e.target.value))}>
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
            <RadioGroup row onChange={(e) => props.setArmyService(parseInt(e.target.value))}>
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

export default EighthComponent;