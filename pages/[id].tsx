import { useRouter } from 'next/router';

function Test() {
  const router = useRouter();
  return <p>Post: {router.query.id}</p>;
}

export default Test;
