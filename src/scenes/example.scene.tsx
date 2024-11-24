import { Box } from '@mui/material';
import { MainLayout } from '@/layout/main.layout';
import MockContents from './mock-contents';

export const ExampleScene = ()=> {
  return (
    <>
      <MainLayout>
        <Box
          display={'flex'}
          justifyContent={'space-evenly'}
          flexDirection={'row'}
          gap={4}
          maxWidth={'70%'}
          minWidth={600}
          padding={1}
        >
          <Box minWidth={800} height={300}>
            <MockContents />
          </Box>
          <Box minWidth={800} height={300}>
            <MockContents />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
}