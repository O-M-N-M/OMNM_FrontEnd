import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface SixthComponentProps {
  isCleaning: number | undefined;
  setIsCleaning: Dispatch<SetStateAction<number | undefined>>;
  tf: boolean
}

const items = ['주 5회 이상', '주 2~3회', '주 1회', '월 1회', '상관없음'];

const SixthComponent = ({ props }: { props: SixthComponentProps }) => {
  const [checkedIc, setCheckedIc] = useState('');

  useEffect(() => {
    if (typeof props.isCleaning === 'number') {
      setCheckedIc(props.isCleaning.toString());
    }
  }, [props.isCleaning]);

  return (
    <FormControl className='ml-auto'>
      {
        (props.tf && checkedIc !== '') ? (
          <RadioGroup row defaultValue={checkedIc} onChange={(e) => props.setIsCleaning(parseInt(e.target.value))}>
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[0]}</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[1]}</Typography>} />
            <FormControlLabel value="2" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[2]}</Typography>} />
            <FormControlLabel value="3" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[3]}</Typography>} />
            <FormControlLabel value="4" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[4]}</Typography>} />
          </RadioGroup>
        ) :
          (!props.tf) && (
            <RadioGroup row onChange={(e) => props.setIsCleaning(parseInt(e.target.value))}>
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[0]}</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[1]}</Typography>} />
              <FormControlLabel value="2" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[2]}</Typography>} />
              <FormControlLabel value="3" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[3]}</Typography>} />
              <FormControlLabel value="4" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-lg font-regular">{items[4]}</Typography>} />
            </RadioGroup>
          )
      }
    </FormControl>
  )
}

export default SixthComponent;