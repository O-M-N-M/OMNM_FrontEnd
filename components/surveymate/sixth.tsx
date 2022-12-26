import { Dispatch, SetStateAction } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface SixthComponentProps {
  isCleaning: number | undefined;
  setIsCleaning: Dispatch<SetStateAction<number | undefined>>;
}

const items = ['주 5회 이상', '주 2~3회', '주 1회', '월 1회', '상관없음'];

const SixthComponent = ({ props }: { props: SixthComponentProps }) => {
  return (
    <FormControl className='ml-auto'>
      <RadioGroup row onChange={(e) => props.setIsCleaning(parseInt(e.target.value))}>
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
                label={<Typography className="text-black text-lg font-regular">{v}</Typography>} />
            )
          })
        }
      </RadioGroup>
    </FormControl>
  )
}

export default SixthComponent;