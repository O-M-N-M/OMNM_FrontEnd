import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

import { Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface FirstComponentProps {
  age: object;
  setAge: Dispatch<SetStateAction<object>>;
  tf: boolean;
}

const items = ['20대 초반', '20대 중반', '20대 후반', '30대 후반'];

const FirstComponent = ({ props }: { props: FirstComponentProps }) => {
  const [loading, setLoading] = useState(true);

  const onChangeEach = (e: ChangeEvent<HTMLInputElement>) => {
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

  useEffect(() => {
    if (Object.values(props.age).includes(true)) {
      setLoading(false);
    }
  }, [Object.values(props.age)]);

  return (
    <FormControl className='flex flex-row ml-auto'>
      {
        ((!loading && props.tf) || (!props.tf)) && (
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
        )
      }

      {
        ((!loading && props.tf) || (!props.tf)) && (
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
        )
      }
    </FormControl>
  )
};

export default FirstComponent;

