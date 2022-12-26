import { Dispatch, SetStateAction } from "react";

interface FirstComponentProps {
  age: number | string | undefined;
  setAge: Dispatch<SetStateAction<string | number | undefined>>;
}

const FirstComponent = ({ props }: { props: FirstComponentProps }) => {
  return (
    <input
      type='text'
      name='age'
      placeholder='입력'
      value={props.age}
      maxLength={2}
      onChange={(e) => {
        isNaN(parseInt(e.target.value)) ?
          props.setAge('') :
          props.setAge(parseInt(e.target.value))
      }}
      className='border-b border-t-0 border-l-0 border-r-0 border-solid border-accent2 text-gray1 text-lg font-regular text-center w-16 ml-auto focus:outline-none'
    />
  )
}

export default FirstComponent;