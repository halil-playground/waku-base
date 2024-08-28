'use client';

import { useRouter_UNSTABLE as useRouter } from 'waku';

export const CurrentPath = () => {
  const { path, searchParams } = useRouter();

  return (
    <>
      <div>current path: {path}</div>
      <div>current searchParams: {searchParams.toString()}</div>
    </>
  );
}