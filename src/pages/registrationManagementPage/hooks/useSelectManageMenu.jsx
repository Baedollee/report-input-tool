import React from "react"
import { useDispatch } from "react-redux";
import { onChangeMenuName } from "redux/modules/MenuSelectSlice";

export const useSelectManageMenu = () => {
  const dispatch = useDispatch();
  const onClickPageTextHandler = (e) => {
    const { value } = e.target;
    dispatch(onChangeMenuName(value));
  };

  return {
    onClickPageTextHandler
  }
}