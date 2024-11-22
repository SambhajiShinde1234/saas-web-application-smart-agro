import { Select, Tab, Tabs } from '@mui/material';
import {
  StyledCardStack,
  StyledFlexBetween,
} from '../../components/styled/styled';
import DxPrimaryTypography from '../../components/ui/DxPrimaryTypography';
import DxTable from '../../components/ui/DxTable';
import { INVENTORY_DATA } from '../../dummy-data/InventoryData';
import { useState } from 'react';

const inventoryTableColumns = {
  seeds: [
    { columnName: 'Name', field: 'itemName', align: 'left', width: 150 },
    {
      columnName: 'Availble Quantity(Bags)',
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
      align: 'center',
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
      columnName: 'Availble Quantity(Bags)',
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
      align: 'center',
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
      columnName: 'Availble Quantity(Bags)',
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
      align: 'center',
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
      columnName: 'Available Quantity(unit)',
      field: 'quantityAvailable',
      align: 'center',
      width: 150,
    },
    { columnName: 'Model', field: 'model', align: 'left', width: 150 },
    {
      columnName: 'Purchased Date',
      field: 'purchaseDate',
      align: 'center',
      width: 150,
    },
    { columnName: 'Supplier', field: 'supplier', align: 'left', width: 150 },
    { columnName: 'condition', field: 'condition', align: 'left', width: 150 },
  ],
};

const inventoryCategories = [
  {
    categoryName: 'Seeds',
    value: 'seeds',
    itemCount: 10,
    icon: '🌱',
  },
  {
    categoryName: 'Fertilizers',
    value: 'fertilizers',
    itemCount: 8,
    icon: '🌾',
  },
  { categoryName: 'Pesticides', value: 'pesticides', itemCount: 5, icon: '🧴' },
  {
    categoryName: 'Machinery/Tools',
    value: 'machineryTools',
    itemCount: 15,
    icon: '🚜',
  },
];

const Inventory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setselectedCategory] = useState('seeds');
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h5">
        Inventory Mangement
      </DxPrimaryTypography>

      <Tabs value={activeTab} onChange={handleTabChange} centered>
        {inventoryCategories.map((category, index) => (
          <Tab
            key={index}
            label={`${category.icon} ${category.categoryName}`}
          />
        ))}
      </Tabs>

      <DxTable
        columns={inventoryTableColumns['seeds']}
        data={INVENTORY_DATA['seeds']}
      />
    </StyledCardStack>
  );
};

export default Inventory;
