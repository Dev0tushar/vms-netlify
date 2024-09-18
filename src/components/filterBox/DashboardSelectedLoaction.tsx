import React, { useState } from 'react';
import FilterBox from '../filterBox/filterBox';
import CommonBlock from '../commonBlock/commonBlock';

const Dashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [cameras, setCameras] = useState<Camera[]>([]);

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const updateCameraData = (cameraItems: Camera[]) => {
    setCameras(cameraItems);
  };

  return (
    <div>
      <FilterBox
        onLocationSelect={handleLocationSelect}
        onCameraDataUpdate={updateCameraData}
      />
      <CommonBlock
        selectedLocation={selectedLocation}
        cameraData={cameras}
      />
    </div>
  );
};

export default Dashboard;
