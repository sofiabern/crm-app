import React from 'react';
import Toolbar from '../../../../components/toolbar';
import SearchInput from '../../../../components/search-input';
import AddPromotionButton from '../../../../components/add-promotion-button';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}