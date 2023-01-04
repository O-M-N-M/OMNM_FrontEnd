import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface EighthComponentProps {
  nationality: number | undefined;
  setNationality: Dispatch<SetStateAction<number | undefined>>;
  tf: boolean;
}

const EighthComponent = ({ props }: { props: EighthComponentProps }) => {
  const [checkedN, setCheckedN] = useState('');

  useEffect(() => {
    if (typeof props.nationality === 'number') {
      setCheckedN(props.nationality.toString());
    }
  }, [props.nationality]);

  return (
    <FormControl className='ml-auto'>
      {
        (props.tf && checkedN !== '') ? (
          <RadioGroup row defaultValue={checkedN} onChange={(e) => props.setNationality(parseInt(e.target.value))}>
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">내국인</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">외국인</Typography>} />
          </RadioGroup>
        ) :
          (!props.tf) && (
            <RadioGroup row onChange={(e) => props.setNationality(parseInt(e.target.value))}>
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">내국인</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">외국인</Typography>} />
            </RadioGroup>
          )
      }

    </FormControl>
  )
}

export default EighthComponent;