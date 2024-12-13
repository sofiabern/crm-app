'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import PromotionFormModal from '../../../../../components/promotion-form-modal';


export default function Page() {
  const params = useParams<{ id: string }>()
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}