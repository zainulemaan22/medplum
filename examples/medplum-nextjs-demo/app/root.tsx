// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
'use client';
import '@mantine/core/styles.css';
import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import '@medplum/react/styles.css';
import { JSX, ReactNode } from 'react';

const medplum = new MedplumClient({
  // Uncomment this to run against the server on your 13.40.11.171
  // baseUrl: 'http://13.40.11.171:8103/',

  // Handle unauthenticated requests
  onUnauthenticated: () => (window.location.href = '/'),

  // Use Next.js fetch
  fetch: (url: string, options?: any) => fetch(url, options),

  // Recommend using cache for React performance
  cacheTime: 10000,
});

export default function Root(props: { children: ReactNode }): JSX.Element {
  return <MedplumProvider medplum={medplum}>{props.children}</MedplumProvider>;
}
