import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';
import './ButtonYear.scss'

interface IButtonYearProps {
  year: string,
  activeYear: string,
  setYear: Dispatch<SetStateAction<string>>
}
const Button: FC<IButtonYearProps> = ({ year, activeYear, setYear }) => {
  function clickHendler() {
    setYear(year)
  }
  if (year === '2023') {
    if (activeYear === '2023') {
      return (
        <div className='btn btn-2023-active' ></div>
      );
    } else {
      return (
        <div className='btn btn-2023' onClick={clickHendler} ></div>
      );
    }
  }
  if (year === '2024') {
    if (activeYear === '2024') {
      return (
        <div className='btn btn-2024-active'></div>
      );
    } else {
      return (
        <div className='btn btn-2024' onClick={clickHendler}></div>
      );
    }
  }
  if (year === '2025') {
    if (activeYear === '2025') {
      return (
        <div className='btn btn-2025-active'></div>
      );
    } else {
      return (
        <div className='btn btn-2025' onClick={clickHendler}></div>
      );
    }
  }
  if (year === '2026') {
    if (activeYear === '2026') {
      return (
        <div className='btn btn-2026-active'></div>
      );
    } else {
      return (
        <div className='btn btn-2026' onClick={clickHendler}></div>
      );
    }
  }
  return null
};

export default Button;