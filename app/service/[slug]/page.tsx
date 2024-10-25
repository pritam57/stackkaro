import React from 'react';
import Slug from '@/components/Slug';

interface Params {
  slug: string;
}
export default async function Page({ params }: { params: Promise<Params> }) {
 
  const { slug } = await params;

  
  return <Slug title={slug} />;
}