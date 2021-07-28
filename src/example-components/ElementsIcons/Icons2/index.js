import React from 'react';

import { Card } from 'reactstrap';

import {
  Printer,
  Settings,
  CloudDrizzle,
  Search,
  Grid,
  Users,
  LifeBuoy,
  Coffee,
  Box,
  Briefcase,
  Layers,
  Bell
} from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <div className="icon-demo-box">
        <Card className="p-2 text-primary">
          <Bell className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-success">
          <Settings className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-warning">
          <Search className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-danger">
          <Grid className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-dark">
          <Users className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-info">
          <LifeBuoy className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-first">
          <CloudDrizzle className="font-size-xxl" />
        </Card>
        <Card className="p-2 text-second">
          <Coffee className="font-size-xxl" />
        </Card>
        <Card className="p-2">
          <Box className="font-size-xxl" />
        </Card>
        <Card className="p-2">
          <Briefcase className="font-size-xxl" />
        </Card>
        <Card className="p-2">
          <Layers className="font-size-xxl" />
        </Card>
        <Card className="p-2">
          <Printer className="font-size-xxl" />
        </Card>
      </div>
    </>
  );
}
