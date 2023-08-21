import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface DepartmentItemProps {
  data: DepartmentData;
  selectedDepartments: string[];
  onDepartmentSelect: (department: string) => void;
}

const DepartmentItem: React.FC<DepartmentItemProps> = ({ data, selectedDepartments, onDepartmentSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  const handleDepartmentSelect = () => {
    onDepartmentSelect(data.department);
  };

  const handleSubDepartmentSelect = (subDept: string) => {
    onDepartmentSelect(subDept);
  };

  const isSelected = selectedDepartments.includes(data.department);
  const areAllSubDepartmentsSelected = data.sub_departments.every(subDept => selectedDepartments.includes(subDept));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={isSelected || areAllSubDepartmentsSelected}
          indeterminate={isSelected && !areAllSubDepartmentsSelected}
          onChange={handleDepartmentSelect}
        />
        <span>{data.department}</span>
        {data.sub_departments.length > 0 && (
          <div onClick={handleExpandToggle} style={{ cursor: 'pointer', marginLeft: 'auto' }}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </div>
        )}
      </div>
      {expanded && (
        <div style={{ marginLeft: '20px' }}>
          {data.sub_departments.map((subDept) => (
            <div key={subDept} style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={selectedDepartments.includes(subDept)}
                onChange={() => handleSubDepartmentSelect(subDept)}
              />
              <span>{subDept}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DepartmentList: React.FC = () => {
  const initialDepartmentData: DepartmentData[] = [
    {
      "department": "customer_service",
      "sub_departments": [
        "support",
        "customer_success"
      ]
    },
    {
      "department": "design",
      "sub_departments": [
        "graphic_design",
        "product_design",
        "web_design"
      ]
    }
  ];

  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleDepartmentSelect = (department: string) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
    } else {
      setSelectedDepartments([...selectedDepartments, department, ...initialDepartmentData.find(d => d.department === department)?.sub_departments || []]);
    }
  };

  return (
    <div>
      {initialDepartmentData.map((deptData) => (
        <DepartmentItem
          key={deptData.department}
          data={deptData}
          selectedDepartments={selectedDepartments}
          onDepartmentSelect={handleDepartmentSelect}
        />
      ))}
    </div>
  );
};

export default DepartmentList;