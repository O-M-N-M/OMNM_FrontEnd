import { Dispatch, SetStateAction } from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface FourthComponentProps {
  department: number | undefined;
  setDepartment: Dispatch<SetStateAction<number | undefined>>;
}

const items = ['같은 학과', '다른 학과', '상관없음'];

const FourthComponent = ({ props }: { props: FourthComponentProps }) => {
  return (
    <FormControl className='ml-auto'>
      <RadioGroup row onChange={(e) => props.setDepartment(parseInt(e.target.value))}>
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

export default FourthComponent;