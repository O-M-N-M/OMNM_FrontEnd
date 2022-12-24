import { Dispatch, SetStateAction } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface EighthComponentProps {
  nationality: number | undefined;
  setNationality: Dispatch<SetStateAction<number | undefined>>;
}

const EighthComponent = ({ props }: { props: EighthComponentProps }) => {
  return (
    <FormControl className='ml-auto'>
      <RadioGroup row onChange={(e) => props.setNationality(parseInt(e.target.value))}>
        <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">내국인</Typography>} />
        <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">외국인</Typography>} />
      </RadioGroup>
    </FormControl>
  )
}

export default EighthComponent;