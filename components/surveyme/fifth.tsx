import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface FifthComponentProps {
  lifeCycle: number | undefined;
  setLifeCycle: Dispatch<SetStateAction<number | undefined>>;
  isPatch: boolean
}

const FifthComponent = ({ props }: { props: FifthComponentProps }) => {
  const [checkedLc, setCheckedLc] = useState('');

  useEffect(() => {
    if (typeof props.lifeCycle === 'number') {
      setCheckedLc(props.lifeCycle.toString());
    }
  }, [props.lifeCycle]);

  return (
    <FormControl className='flex flex-row flex-wrap labtop:ml-auto mobile:ml-6 mobile:mt-2'>
      {
        (props.isPatch && checkedLc !== '') ? (
          <RadioGroup row defaultValue={checkedLc} onChange={(e) => props.setLifeCycle(parseInt(e.target.value))} >
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">아침형</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">저녁형</Typography>} />
          </RadioGroup>
        ) :
          (!props.isPatch) && (
            <RadioGroup row onChange={(e) => props.setLifeCycle(parseInt(e.target.value))} >
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">아침형</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">저녁형</Typography>} />
            </RadioGroup>
          )
      }

    </FormControl>
  )
}

export default FifthComponent;