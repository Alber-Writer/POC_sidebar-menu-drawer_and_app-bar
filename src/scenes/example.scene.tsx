import { Box } from '@mui/material';
import { MainLayout } from '@/layout/main.layout';
import MockContents from './mock-contents';

export const ExampleScene = ()=> {
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
          <Box minWidth={700} height={300}>
            <MockContents />
          </Box>
          <Box minWidth={700} height={300}>
            <MockContents />
          </Box>
          <Box minWidth={700} height={300}>
            <MockContents />
          </Box>
          <Box minWidth={700} height={300}>
            <MockContents />
          </Box>
          <Box minWidth={700} height={300}>
            <MockContents />
          </Box>
          <Box minWidth={700} height={300}>
            <MockContents />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
}