import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface ThirdComponentProps {
  isSmoking: number | undefined;
  setIsSmoking: Dispatch<SetStateAction<number | undefined>>;
  isPatch: boolean
}

const ThirdComponent = ({ props }: { props: ThirdComponentProps }) => {
  const [checkedIs, setCheckedIs] = useState('');

  useEffect(() => {
    if (typeof props.isSmoking === 'number') {
      setCheckedIs(props.isSmoking.toString());
    }
  }, [props.isSmoking]);

  return (
    <FormControl className='flex flex-row flex-wrap labtop:ml-auto mobile:ml-6 mobile:mt-2'>
      {
        (props.isPatch && checkedIs !== '') ? (
          <RadioGroup row defaultValue={checkedIs} onChange={(e) => props.setIsSmoking(parseInt(e.target.value))}>
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">흡연</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">비흡연</Typography>} />
          </RadioGroup>
        ) :
          (!props.isPatch) && (
            <RadioGroup row onChange={(e) => props.setIsSmoking(parseInt(e.target.value))}>
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">흡연</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black labtop:text-lg mobile:text-base font-regular">비흡연</Typography>} />
            </RadioGroup>
          )
      }
    </FormControl>
  )
}

export default ThirdComponent;