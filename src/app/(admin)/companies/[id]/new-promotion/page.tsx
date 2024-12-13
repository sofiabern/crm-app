'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PromotionForm from '@/app/components/promotion-form';



export default function Page() {
  const params = useParams<{ id: string }>()
  const companyId = params.id;

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={companyId} />
    </div>
  );
}
