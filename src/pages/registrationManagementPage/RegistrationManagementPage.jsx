import React from 'react';
import { useSelector } from 'react-redux';
import SelectManageMenu from './components/SelectManageMenu';
import { useRegistrationManagement } from './hooks/useRegistrationManagement';
import { ViewBox, Wrap } from './styles/RegistrationManagementPage.styles';

const RegistrationManagementPage = () => {
  const { menuName } = useSelector((state) => state.MenuSelectSlice);
  const {onChangePageHandler} = useRegistrationManagement({menuName})
  // const [selectMenu, setSelectMenu] = useState(menuName);

  // console.log('스테이트');
  // console.log(selectMenu);

  // useEffect(() => {
  //   dispatch(onChangeMenuName(selectMenu));
  // }, [selectMenu]);


  return (
    <Wrap>
      <SelectManageMenu />
      <ViewBox>{onChangePageHandler()}</ViewBox>
    </Wrap>
  );
};

export default RegistrationManagementPage;
