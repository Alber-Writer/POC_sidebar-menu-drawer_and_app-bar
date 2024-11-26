/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@mui/material';
import { MainLayout } from '@/layouts/main/main.layout';
import MockContents from './mock-contents';

export const ExampleScene = () => {
  return (
    <>
      <MainLayout>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          gap={10}
          minWidth={600}
          padding={1}
          paddingTop={5}
        >
          {Array(5).fill('').map((_table,index) => (
            //We use index as key because this is just mock data
            <Box minWidth={700} height={300} key={index}>
              <MockContents />
            </Box>
          ))}
        </Box>
      </MainLayout>
    </>
  );
};
