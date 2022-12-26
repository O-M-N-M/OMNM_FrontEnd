import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Box } from "@mui/material";

import MagnifyingIcon from '../../public/magnifying2.png';

interface FourthComponentProps {
  department: string;
  setDepartment: Dispatch<SetStateAction<string>>;
}

const FourthComponent = ({ props }: { props: FourthComponentProps }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setDepartment(e.target.value);
  }

  return (
    <>
      <Box className='flex flex-row items-center border-2 border-solid border-accent2 rounded-2xl px-6 py-3 ml-auto'>
        <Image src={MagnifyingIcon} width={26} height={26} />
        <input
          type='text'
          name='department'
          placeholder='학과명 검색'
          value={props.department}
          onChange={(e) => onChange(e)}
          className='border-none text-gray1 text-lg font-regular ml-5 focus:outline-none'
        />
      </Box>


    </>
  );
};

export default FourthComponent;