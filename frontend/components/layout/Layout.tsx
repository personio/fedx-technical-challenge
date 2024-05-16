import { Drawer, List, ListItemButton, Skeleton } from '@mui/material';
import { GeistSans } from 'geist/font/sans';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Frontend Release Manager</title>
      </Head>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <List>
          <ListItemButton component={Link} href='/'>
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem', width: '100%', height: '2rem' }}
              animation={false}
            />
          </ListItemButton>
          <ListItemButton component={Link} href='/rollback'>
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem', width: '100%', height: '2rem' }}
              animation={false}
            />
          </ListItemButton>
        </List>
      </Drawer>
      <main className={GeistSans.className}>{children}</main>
    </>
  );
}
