/* eslint-disable react/prop-types */
import { StyledTab, StyledTabs } from '../styled/styled';

const DxTabs = ({ tabsData, activeTab, handleTabChange }) => {
  return (
    <StyledTabs value={activeTab} onChange={handleTabChange}>
      {tabsData.map((tab, index) => (
        <StyledTab
          key={index}
          label={
            <>
              {tab.icon && <>{tab.icon}</>}
              {tab.label}
            </>
          }
          value={tab.value}
        />
      ))}
    </StyledTabs>
  );
};

export default DxTabs;
