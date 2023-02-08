// import { useRouter } from 'next/router';

import { createClient } from '@supabase/supabase-js';

import {default as ImageCard, Image} from '@/components/library/imageCard';
//import { Meta } from '@/layouts/Meta';
//import { Main } from '@/layout/Main';

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );

  const { data } = await supabaseAdmin.from('images').select('*').order('id');

  return {
    props: {
      images: data,
    },
  };
}

const Gallery = ({ images }: { images: Image[] }) => {
  // const router = useRouter();

  return (
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <div key={image.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Gallery;
