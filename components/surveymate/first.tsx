import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type ageType = {
  '0': boolean, '1': boolean, '2': boolean, '3': boolean, '4': boolean
}

interface FirstComponentProps {
  age: ageType;
  setAge: Dispatch<SetStateAction<ageType>>;
}

const items = ['20대 초반', '20대 중반', '20대 후반', '30대 후반'];

const FirstComponent = ({ props }: { props: FirstComponentProps }) => {
  const onChangeEach = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    props.setAge((prevState) => {
      return {
        ...prevState,
        [e.target.value]: !props.age[e.target.value as keyof typeof props.age],
        '4': false
      }
    });

    e.target.checked = !e.target.checked;
  }

  const onChangeAll = (e: ChangeEvent<HTMLInputElement>) => {
    props.setAge({
      '0': false,
      '1': false,
      '2': false,
      '3': false,
      '4': true
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
                  checked={props.age[index.toString() as keyof typeof props.age]}
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
        value={'4' || ''}
        control={
          <Checkbox
            checked={props.age['4' as keyof typeof props.age]}
            onChange={(e) => onChangeAll(e)}
            icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
            checkedIcon={<CheckCircleIcon />}
            size="small"
          />
        }
        label={<Typography className="text-black text-lg font-regular">상관없음</Typography>}
      />
    </FormControl>
  )
};

export default FirstComponent;

