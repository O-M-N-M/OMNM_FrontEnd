import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface NinethComponentProps {
  armyService: number | undefined | null;
  setArmyService: Dispatch<SetStateAction<number | undefined | null>>;
  tf: boolean;
}

const NinethComponent = ({ props }: { props: NinethComponentProps }) => {
  const [checkedAs, setCheckedAs] = useState('');

  useEffect(() => {
    if (typeof props.armyService === 'number') {
      setCheckedAs(props.armyService.toString());
    }

    console.log(checkedAs);
  }, [props.armyService]);

  return (
    <FormControl className='ml-auto'>
      {
        (props.tf && checkedAs !== '') ? (
          <RadioGroup row defaultValue={checkedAs} onChange={(e) => props.setArmyService(parseInt(e.target.value))}>
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">군필</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">미필</Typography>} />
          </RadioGroup>
        ) :
          (!props.tf) && (
            <RadioGroup row onChange={(e) => props.setArmyService(parseInt(e.target.value))}>
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">군필</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">미필</Typography>} />
            </RadioGroup>
          )
      }
    </FormControl>
  )
}

export default NinethComponent;