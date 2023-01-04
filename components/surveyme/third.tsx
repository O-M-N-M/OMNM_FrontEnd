import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface ThirdComponentProps {
  isSmoking: number | undefined;
  setIsSmoking: Dispatch<SetStateAction<number | undefined>>;
  tf: boolean
}

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
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">흡연</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">비흡연</Typography>} />
          </RadioGroup>
        ) :
          (!props.tf) && (
            <RadioGroup row onChange={(e) => props.setIsSmoking(parseInt(e.target.value))}>
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">흡연</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">비흡연</Typography>} />
            </RadioGroup>
          )
      }
    </FormControl>
  )
}

export default ThirdComponent;