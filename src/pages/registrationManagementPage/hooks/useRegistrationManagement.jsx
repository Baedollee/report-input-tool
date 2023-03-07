import ScreenCodeManagement from "components/ScreenCodeManagement/ScreenCodeManagement";
import ScreenGameInformManagement from "components/ScreenGameInformManagement/ScreenGameInformManagement";
import ScreenGameSelect from "components/ScreenGameSelect/ScreenGameSelect";
import ScreenPlayerRegister from "components/ScreenPlayerRegister/ScreenPlayerRegister";
import ScreenRefereeRegister from "components/ScreenRefereeRegister/ScreenRefereeRegister";
import ScreenTeamRegister from "components/ScreenTeamRegister/ScreenTeamRegister";
import React, { useCallback } from "react"
import { EnumRegistrationManagementScreen } from "types/EnumRegistrationManagementScreen";

export const useRegistrationManagement = ({menuName}) => {
  const onChangePageHandler = useCallback(
    () => {
      switch (menuName) {
        case EnumRegistrationManagementScreen.ScreenTeamRegister:
        return <ScreenTeamRegister />;
        case EnumRegistrationManagementScreen.ScreenPlayerRegister:
          return <ScreenPlayerRegister />;
        case EnumRegistrationManagementScreen.ScreenCodeManagement:
          return <ScreenCodeManagement />;
        case EnumRegistrationManagementScreen.ScreenRefereeRegister:
          return <ScreenRefereeRegister />;
        case EnumRegistrationManagementScreen.ScreenGameSelect:
          return <ScreenGameSelect />
        case EnumRegistrationManagementScreen.ScreenGameInformManagement:
          return <ScreenGameInformManagement />
        default:
          return <></>
      }
    },
    [menuName],
  )
  return {
    onChangePageHandler
  }
}