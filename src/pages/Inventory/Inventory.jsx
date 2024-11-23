import { StyledCard, StyledCardStack } from '../../components/styled/styled';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxTable from '../../components/ui/DxTable';
import DxTabs from '../../components/ui/DxTabs';
import { INVENTORY_DATA } from '../../dummy-data/InventoryData';
import { useState } from 'react';

const inventoryTableColumns = {
  seeds: [
    { columnName: 'Name', field: 'itemName', align: 'left', width: 150 },
    {
      columnName: 'Available (Bags)',
      field: 'quantityAvailable',
      align: 'center',
      width: 150,
    },
    {
      columnName: 'Batch No.',
      field: 'batchNumber',
      align: 'center',
      width: 150,
    },
    {
      columnName: 'Expiry Date',
      field: 'expiryDate',
      align: 'left',
      width: 150,
    },
    { columnName: 'Supplier', field: 'supplier', align: 'left', width: 150 },
    {
      columnName: 'Threshold',
      field: 'reorderLevel',
      align: 'center',
      width: 150,
    },
  ],
  fertilizers: [
    { columnName: 'Name', field: 'itemName', align: 'left', width: 150 },
    {
      columnName: 'Available (Bags)',
      field: 'quantityAvailable',
      align: 'center',
      width: 150,
    },
    {
      columnName: 'Batch No.',
      field: 'batchNumber',
      align: 'center',
      width: 150,
    },
    {
      columnName: 'Expiry Date',
      field: 'expiryDate',
      align: 'left',
      width: 150,
    },
    { columnName: 'Supplier', field: 'supplier', align: 'left', width: 150 },
    {
      columnName: 'Threshold',
      field: 'reorderLevel',
      align: 'center',
      width: 150,
    },
  ],
  pesticides: [
    { columnName: 'Name', field: 'itemName', align: 'left', width: 150 },
    {
      columnName: 'Available (Bags)',
      field: 'quantityAvailable',
      align: 'center',
      width: 150,
    },
    {
      columnName: 'Batch No.',
      field: 'batchNumber',
      align: 'center',
      width: 150,
    },
    {
      columnName: 'Expiry Date',
      field: 'expiryDate',
      align: 'left',
      width: 150,
    },
    { columnName: 'Supplier', field: 'supplier', align: 'left', width: 150 },
    {
      columnName: 'Threshold',
      field: 'reorderLevel',
      align: 'center',
      width: 150,
    },
  ],
  machineryTools: [
    { columnName: 'Name', field: 'itemName', align: 'left', width: 150 },
    {
      columnName: 'Available (Units)',
      field: 'quantityAvailable',
      align: 'center',
      width: 150,
    },
    { columnName: 'Model', field: 'model', align: 'left', width: 150 },
    {
      columnName: 'Purchased Date',
      field: 'purchaseDate',
      align: 'left',
      width: 150,
    },
    { columnName: 'Supplier', field: 'supplier', align: 'left', width: 150 },
    { columnName: 'condition', field: 'condition', align: 'left', width: 150 },
  ],
};

const inventoryCategories = [
  {
    label: 'Seeds',
    value: 'seeds',
    itemCount: 10,
    icon: '🌱',
  },
  {
    label: 'Fertilizers',
    value: 'fertilizers',
    itemCount: 8,
    icon: '🌾',
  },
  { label: 'Pesticides', value: 'pesticides', itemCount: 5, icon: '🧴' },
  {
    label: 'Machinery/Tools',
    value: 'machineryTools',
    itemCount: 15,
    icon: '🚜',
  },
];

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('seeds');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h5">
        Inventory Mangement
      </DxPrimaryTypography>
      <StyledCard>
        <StyledCardStack>
          <DxTabs
            tabsData={inventoryCategories}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
          <DxTable
            columns={inventoryTableColumns[activeTab]}
            data={INVENTORY_DATA[activeTab]}
          />
        </StyledCardStack>
      </StyledCard>
    </StyledCardStack>
  );
};

export default Inventory;
