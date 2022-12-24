import { Dispatch, SetStateAction } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface SeventhComponentProps {
  isCleaning: number | undefined;
  setIsCleaning: Dispatch<SetStateAction<number | undefined>>;
}

const SeventhComponent = ({ props }: { props: SeventhComponentProps }) => {
  return (
    <FormControl className='ml-auto'>
      <RadioGroup row onChange={(e) => props.setIsCleaning(parseInt(e.target.value))}>
        <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">주 5회 이상</Typography>} />
        <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">주 2~3회</Typography>} />
        <FormControlLabel value="2" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">주 1회</Typography>} />
        <FormControlLabel value="3" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">월 1회</Typography>} />
      </RadioGroup>
    </FormControl>
  )
};

export default SeventhComponent;