import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface SixthComponentProps {
  sleepingPattern: object;
  setSleepingPattern: Dispatch<SetStateAction<object>>;
}

const items = ['코골이', '이갈이', '몸부림'];

const SixthComponent = ({ props }: { props: SixthComponentProps }) => {
  const onChangeEach = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSleepingPattern((prevState) => {
      return {
        ...prevState,
        [e.target.value]: !props.sleepingPattern[e.target.value as keyof typeof props.sleepingPattern],
        '3': false
      }
    });

    e.target.checked = !e.target.checked;

    console.log(props.sleepingPattern);
  }

  const onChangeAll = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSleepingPattern({
      '0': false,
      '1': false,
      '2': false,
      '3': true,
    });

    e.target.checked = true;
  }

  return (
    <FormControl className='flex flex-row ml-auto'>
      {
        items.map((v, index) => {
          return (
            <FormControlLabel
              key={index}
              value={index}
              control={
                <Checkbox
                  checked={props.sleepingPattern[index as keyof typeof props.sleepingPattern]}
                  onChange={(e) => onChangeEach(e)}
                  icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                  checkedIcon={<CheckCircleIcon />}
                  size="small"
                />
              }
              label={<Typography className="text-black text-lg font-regular">{v}</Typography>}
            />
          )
        })
      }

      <FormControlLabel
        value={'3' || ''}
        control={
          <Checkbox
            checked={props.sleepingPattern['3' as keyof typeof props.sleepingPattern]}
            onChange={(e) => onChangeAll(e)}
            icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
            checkedIcon={<CheckCircleIcon />}
            size="small"
          />}
        label={<Typography className="text-black text-lg font-regular">없음</Typography>}
      />
    </FormControl>
  )
};

export default SixthComponent;

