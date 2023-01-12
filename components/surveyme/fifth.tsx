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
    <FormControl className='ml-auto'>
      {
        (props.isPatch && checkedLc !== '') ? (
          <RadioGroup row defaultValue={checkedLc} onChange={(e) => props.setLifeCycle(parseInt(e.target.value))} >
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">아침형</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">저녁형</Typography>} />
          </RadioGroup>
        ) :
          (!props.isPatch) && (
            <RadioGroup row onChange={(e) => props.setLifeCycle(parseInt(e.target.value))} >
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">아침형</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">저녁형</Typography>} />
            </RadioGroup>
          )
      }

    </FormControl>
  )
}

export default FifthComponent;